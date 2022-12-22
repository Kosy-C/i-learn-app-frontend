import React, {useEffect, useState} from "react";
import NavBar from '../../components/navBar/navBar';
import chemLogo from "../../assets/chem.jpg";
import star from "../../assets/star.png";
import axios from 'axios';
import coloredStar from "../../assets/colored-star.png";
import "../AllCourses/AllCourses.css";
import dotenv from "dotenv";
// dotenv.config();


const jsonUrl =  "http://localhost:8000/courses";
// process.env.JSON_URL as string;
// const style = {
//     text: "See more"
// }
const AllCourses = () => {
    const [show, setShow] = useState(false)
    const [courses, setCourses] = useState([])
    const getCourses = async() => {
        try {
            const response = await axios.get(jsonUrl)
            console.log("response data is ", response.data)
            setCourses(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getCourses()
    }, [])

    const showMore = () => {
        setShow((previousState)=>!previousState)
        // setText((initial)=>initial="See less")
    }
  return (
    <div>
      <NavBar />
      <div className="all_courses_container">
        <div className="all_courses_hero">
            {/* <div className="all_courses_allCourses"> */}
            <h2 className="all_courses_heading">All Courses</h2>
            {/* </div> */}
            <input className="all_courses_search" type="text" placeholder='Search' />
        </div>
                <div className="all_courses_card_container">
                    { courses.length>0 ? courses.map((course: any, index:number)=>{
                        return ( 
                            <div key={index}>
                                <div id="all_courses_cat">
                                <h2>{course.category} courses</h2>
                                </div>
                                <div className="all_courses_card">
                                {
                                    course.course.slice(0,6).map((c:any, index:number)=>(
                                        <div className="all_courses_details">
                                            <div key={c.courseId} className="all_courses_img">
                                            <img src={c.image} alt="course_logo" />
                                            </div>
                                            <div className="all_courses_features">
                                            <h2>{c.title}</h2>
                                            <p>{c.name}</p>
                                            <p>{c.rating}
                                            <span><img src={coloredStar}/></span>
                                            <span><img src={star}/></span>
                                            <span>({index})</span>
                                            </p>
                                            </div>
                                        </div>
                                        )
                                    )
                                     }
                                   {show && course.course.slice(6).map((c:any, index:number)=>(
                                        <div className="all_courses_details">
                                            <div key={c.courseId} className="all_courses_img">
                                            <img src={c.image} alt="course_logo" />
                                            </div>
                                            <div className="all_courses_features">
                                            <h2>{c.title}</h2>
                                            <p>{c.name}</p>
                                            <p>{c.rating}
                                            <span><img src={coloredStar}/></span>
                                            <span><img src={star}/></span>
                                            <span>({index})</span>
                                            </p>
                                            </div>
                                        </div>
                                        )
                                    )
                                }
                                </div>
                                { !show && (
                                     <div className="all_courses_seeMore">
                                     <a href='#' onClick={showMore}>See more</a>
                                 </div>
                                )
                                       
                                }
                                { show && (
                                    <div className="all_courses_seeMore">
                                    <a href='#' onClick={showMore}>See less</a>
                                </div>
                                )
                                    
                                }
                                
                                
                            </div> 
                        )}
                    )
                    :
                    <div>
                        No courses for this category
                    </div>
                    }
                </div>
        </div>
    </div>
  )
}

export default AllCourses
