 import React, { useEffect, useState } from "react";
 import './tutorAllCoursesModal.css'
// // import NavBar from '../../components/navBar/navBar';

import axios from "axios";
// import coloredStar from "../../assets/colored-star.png";


// // import NavBar from './navBar/navBar';
// import database from "../../db/database.json";
const jsonUrl = "http://localhost:7100/tutors";
// const TutorAllCoursesModal = (tutors: any) => {
	// const [showTutorCourse, setShowTutorCourse] = useState(false);
	// const [tutor, setTutor] = useState([]);
	// const getTutor = async () => {
	// 	try {
	// 		const response = await axios.get(jsonUrl);
	// 		console.log(response.data);
	// 		setTutor(response.data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	// useEffect(() => {
	// 	getTutor();
	// }, []);

// 	return (
// 		<div className="tutor_all_courses_container">
// 			<div className="tutor_all_courses_background_div"></div>
// 			{tutor.courses.map()}
// 		</div>
// 	);
// };
// export default TutorAllCoursesModal;


const Modal = ({closeModal, oneTutor}:{closeModal:any, oneTutor:any})=>{
//     const [openModal, setOpenModal] = useState(false)
//     const [show, setShow] = useState(false);
//     const [tutors, setTutor] = useState([]);
//     const getTutor = async () => {
//       try {
//         const response = await axios.get(jsonUrl);
//         console.log(response.data);
//         setTutor(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     useEffect(() => {
//       getTutor();
//     }, []);
//     const showMore = () => {
//       setShow((previousState) => !previousState);
//       // setText((initial)=>initial="See less")
//   };
    
            // {tutors.map((tutor: any, index: number) => {
        return(
            // <div key={index} className="unique_tutor_card">
        <div className="tutor-allcourses-modal-background">
            <div className="tutor-allcourses-modal-container">
                
                <h1 className="tutor_course_header_styling">Courses by {oneTutor.name}</h1>
                {oneTutor.courses.map((course:any)=>
                <ul key={course.course_id} className="course-list">
                    <li className="course-list-item" >{course.title}</li>
                    </ul>
                )}
    
                <div className="titleCloseBtn">
                    <p onClick={()=> closeModal(false)} className="close-tutor-courses-modal">Close</p>

                </div>

            </div>
      
            </div>
              
            // </div>
    )
    
// })
// }
}

export default Modal