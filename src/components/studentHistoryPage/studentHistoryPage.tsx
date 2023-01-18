import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./student.css";
import maths from "../../assets/maths.jpg";
import axios from "axios";
import { apiGet } from "../../utils/api/axios";
import NavBar from "../navBar/navBar";
import  ProgressBar  from "../ProgressBar/ProgressBar";
const StudentHistoryPage = () => {
    const [courses, setCourses] = useState<any>([]);
    useEffect(() => {
        const getHistory = async () => {
            try {
                const { data } = await apiGet('/courses/getStudentHistory');
                setCourses(data.courses);
            } catch (error) {
                console.log(error);
            }
        };
        getHistory();
    }, []);
    return (
        <>
        <div>
        <NavBar />
            <div className="header">
            <div className="all-courses-header">
                    <h2 className="all_courses_heading">My Courses</h2>
                </div>
            </div>
            <div className="all-courses-container">
            {courses.map((course: any) => {
                return (
                    <div className="all-courses-card-container">
                        <div className="">
                            <div className="all-courses-pro">
                                <Link className="Link" to={`/paid-courses/${course.id}`}>
                                <img src={course.course_image} alt="" className="all-img-courses-container" />
                                </Link>
                                <div className="card-details">
                                    <div className="subj">
                                        <div className="subje">
                                        <Link className="Link" to={`/paid-courses/${course.id}`}>
                                        <h3>
                                            <b>
                                               <h3 className="courses-titles">{course.title}</h3>
                                                <br /> <h3 className="courses-description">{course.description}</h3>
                                            </b>
                                        </h3>
                                        </Link>
                                        {/* <h3> <b>Chemistry for beginners:<br/>30 days perfection</b></h3> */}
                                        </div>
                                            <div>
                                            <button className="rate-btn-turo" type="submit"> Rate Tutor</button>
                                            <button id="rate-course-btn" type="submit"> Rate Course</button>
                                            </div>
                                    </div>
                                    <div className="student-details">
                                        {/* <p>{course.category}</p> */}
                                        {/* <p>Adekunle Ayo</p> */}
                                        <ProgressBar currentPage={0} totalPages={0}/>
                                        <p className="progress-bar-name">Your progress</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            </div>
            </div>
        </>
    );
};
export default StudentHistoryPage;
