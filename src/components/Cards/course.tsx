import React, { useEffect, useState } from "react";
import "../RecommendedCourses/RecommendedCourses.css";
import { Link } from "react-router-dom";
import { apiGet } from "../../utils/api/axios";
import { whiteStar } from "../../assets/index";
import { Button } from "antd";

const course = ({ course }: any) => {
    
	return (
		<>
			<div className="course-container">
									<div className="course-img">
										<img
											src={course.course_image}
											alt=""
											style={{ width: "350px" }}
										/>
									</div>

									<div className="course-details">
										<h3 className="course-title">{course.title}</h3>
										<p className="course-name">
											{course?.name !== undefined ? course.name : ""}
										</p>
										<div className="course-ratings">
											<div>{course.rating}</div>
											<div style={{ margin: "0 8px 0 8px" }}>
												⭐ ⭐ ⭐ ⭐{" "}
												<img
													style={{ marginTop: "0.1rem" }}
													src={whiteStar}
													alt=""
												/>
											</div>
											<div>{course.rating}</div>
										</div>
									</div>
								</div>
		</>
	);
};

export default course;