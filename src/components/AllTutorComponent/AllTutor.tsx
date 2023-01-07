import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/navBar";
import star from "../../assets/star.png";
import axios from "axios";
import coloredStar from "../../assets/colored-star.png";
import "./AllTutor.css";

const jsonUrl = "http://localhost:7100/tutors";
const AllTutor = () => {
  const [show, setShow] = useState(false);
  const [tutors, setTutor] = useState([]);
  const getTutor = async () => {
    try {
      const response = await axios.get(jsonUrl);
      console.log(response.data);
      setTutor(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTutor();
  }, []);
  const showMore = () => {
    setShow((previousState) => !previousState);
    // setText((initial)=>initial="See less")
};
  return (
    <>
      <NavBar />
      <div className="unique_all_tutors_container">
        <div className="unique_all_tutors_text_and_search_container">
          <h1 className="unique_all_tutor_heading">All Tutors</h1>
          <input
            className="unique_all_courses_search"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="unique_our_tutors_and_all_tutor_card_container">
          <div className="unique_our_tutors">Our Tutors</div>
          <div className="unique_all_tutor_card_container">
            {tutors.map((tutor: any, index: number) => {
              return (
                <div key={index} className="unique_tutor_card">
                  <div className="unique_tutor_avatar_container">
                    <img className="unique_tutor_avatar" src={tutor.avatar} alt="" />
                  </div>
                  <div className="unique_tutor_details">
                    <p className="unique_tutor_name">{tutor.name}</p>
                    <button className="unique_see_tutor_courses_button">
                      See courses
                    </button>
                    <div className="unique_tutor_rating_container">
                      <div className="unique_rating_text_container">
                        <span>{tutor.rating}</span>
                      </div>

                      <div className="unique_tutor_rating_stars_container">
                        <div className="unique_tutor_rating_star1">
                        <img src={coloredStar} alt="" />
                            <img src={star} alt="" />
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  {show &&
                    tutor.courses.map((c: any, index: number) => (
                      <div className="unique_all_courses_details">
                        <div key={c.course_id} className="unique_all_courses_img">
                          <img src={c.cover_image} alt="unique_course_logo" />
                        </div>
                        <h3>{c.title}</h3>

                        <h3>
                          {c.rating}
                          {/* <span><img src={coloredStar}/></span> */}
                          {/* <span><img src={star}/></span> */}
                          <span>({index})</span>
                        </h3>
                      </div>
                    ))}
                </div>
              );
            })}
          </div>
          <div className="unique_see_more">
            <button className="unique_button_seee_more">
            See more &#8964;
            </button>
            </div>
            {/* {!show && (
                    <div className="unique_see_more">
                        <a href="#" onClick={showMore}>
                            See more
                        </a>
                    </div>
                )}
                {show && (
                    <div className="unique_see_more">
                        <a href="#" onClick={showMore}>
                            See less
                        </a>
                    </div>
                )} */}
        </div>
      </div>
    </>
  );
};
export default AllTutor;
