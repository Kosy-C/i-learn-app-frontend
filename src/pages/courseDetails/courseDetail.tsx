import React, { useState, useEffect } from "react";
import "./courseDetail.css";
import Rating from "../../components/Rating/Rating";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiGet } from "../../utils/api/axios";
import { CourseModel } from "./interface";

import MakePayment from "../../components/Payments/MakePayment";
import { useAuth } from "../../useContext";
import LoaderRings from "../../components/Loader/LoaderRings";

const CourseDetail = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [course, setCourse] = useState<CourseModel>();

  const { user, loggedInUser, loading } = useAuth();

  // const [email, setEmail] = useState(user?.email);
  const params = useParams();
  useEffect(() => {
    const getCourseDetail = async () => {
      const { data } = await apiGet(`/courses/get-course/${params.id}`);
      setCourse(data.course);
      course?.rating;
    };
    getCourseDetail();
    loggedInUser();
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const makePayment = () => {
    setModalOpen(true);
  };

  return !user || !course ? (
    <LoaderRings />
  ) : (
    <>
      <button className="cd-rate_course_arrowButton" onClick={goBack}>
        &#8249; Go Back
      </button>

      <div className="heading-border">
        <h1 className="cd-heading"> About the course</h1>
      </div>
      <div className="cd-container">
        <div
          className="cd-course-container"
          style={{
            backgroundImage: `url(
              ${course.course_image}
              )`,
          }}
        >
          <div className="course-overlay">
            <div className="course--container__content">
              <h2 className="cd-title">{course.title}</h2>
              <p className="cd-p">{course.description}</p>
              <div className="cd-rating">
                <Rating rating={course.rating} image={""} color={""} />
              </div>
              <p>
                Updated{" "}
                {course && new Date(course.createdAt).toLocaleString("en-NG")}
              </p>

              <h4>{`₦${Number(course.pricing).toLocaleString()}`}</h4>
            </div>
          </div>
        </div>

        <div className="cd-tutor-container">
          <h2 className="cd-tutor-title">About the Tutor</h2>
          <div className="cd-tutor-profile">
            <img src={course.tutor.image} alt="tutor" />
            <div className="cd-name-courses">
              <span className="cd-tutor-name">{course.tutor.name}</span>
              <span className="course-no">62 Courses</span>
            </div>
          </div>
          <p className="cd-about-tutor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nibh
            quam odio sit vestibulum sagittis urna.
          </p>
        </div>

        <div className="cd-time-container">
          <div className="ratings-container">
            <p className="cd-ratings">Ratings</p>
            <hr />
            <div className="rating-body">
              <p className="rating-heading">Awesome Tutor</p>
              <p>
                excellent tutor does good very very well at all times great one{" "}
              </p>
            </div>
            <hr />
            <div className="rating-body">
              <p className="rating-heading">Awesome Tutor</p>
              <p>
                excellent tutor does good very very well at all times great one
              </p>
            </div>
          </div>
        </div>
        <div className="cd-buttons">
          <button className="cal-button" onClick={makePayment}>
            Pay Now
          </button>
          <MakePayment
            course={course!}
            openModal={modalOpen}
            closeModal={() => setModalOpen(false)}
            email={user?.email}
          />
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
