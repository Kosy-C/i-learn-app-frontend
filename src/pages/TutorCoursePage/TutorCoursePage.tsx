import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/navBar";
import SubNavbar from "../../components/SubNavbar/SubNavbar";
import "./TutorCoursePage.css";
import { apiGet } from "../../utils/api/axios";
import { Link, useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import { BiArrowBack } from "react-icons/bi";

interface Course {
    id: string;
    title: string;
    description: string;
    course_image: string;
    pricing: number;
    rating: number;
}

const TutorCoursesPage: React.FC = () => {
    const [details, setDetails] = useState<Course[]>([]);

    // const { tutorId } = useParams();

    const tutorId = "c9a60c59-750b-40c1-9492-19025fa60beb";

    useEffect(() => {
        async function getData() {
            const { data } = await apiGet(`/users/tutors/${tutorId}/course`);
            setDetails(data.courses);
        }
        void getData();
    }, []);
    return (
        <>
            <div className="contentPage">
                <NavBar />
                <SubNavbar name="" welcome="" />
                <p>
                    <Link to="/all-tutors" className="coursesPage-icon">
                        <BiArrowBack /> Back
                    </Link>
                </p>
                <div className="coursePage-container">
                    {details.map((detail) => (
                        <div className="coursePage-details" key={detail.id}>
                            <div className="coursePage-image">
                                <img src={detail.course_image} alt="Course Image" />{" "}
                            </div>
                            <div className="coursePage-writeUps">
                                <h3 className="CoursePage-title">{detail.title}</h3>
                                <h4 className="coursePage-desc">{detail.description}</h4>
                                <div className="coursePage-price">
                                    <h4 className="coursePage-price">
                                        Price:💲 {detail.pricing}
                                    </h4>
                                </div>
                                <div className="coursePage-rating">
                                    <Rating rating={detail.rating} image={""} color={""} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TutorCoursesPage;
