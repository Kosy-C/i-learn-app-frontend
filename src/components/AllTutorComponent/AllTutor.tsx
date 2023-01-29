import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/navBar";
import star from "../../assets/star.png";
import {AiOutlineSearch} from "react-icons/ai"
import axios from "axios";
import coloredStar from "../../assets/colored-star.png";
import "./AllTutor.css";
import Modal from "../TutorAllCourses/tutorAllCoursesModal";
import { title } from "process";
import { apiGet } from "../../utils/api/axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { any } from "prop-types";
import Ellipse  from "../../assets/images/Ellipse 4.png"
import Rating from "../Rating/Rating";
import avatar from '../../assets/tutorAvatar.jpg';


const AllTutor = () => {
  const [readMore, setReadMore] = useState(6);
  const [openModal, setOpenModal] = useState(false);
  const [show, setShow] = useState(false);
  const [tutors, setTutor] = useState([]);
  const [oneTutor, setOneTutor] = useState({});
  const [keyword, setKeyword] = useState("")
  const [firstNos, setFirstNos] = useState(6)
  const [checkkeyword, setCheckKeyword] = useState(true)
  const navigate = useNavigate()
  const getAllTutor = async () => {
    try {
    const response =  await apiGet('/users/all-tutors')
      console.log(response.data.findTutor);
      setTutor(response.data.findTutor);
      setSearchSubmitted(false)
    } catch (error) {
      console.log(error);
    }
  };
  const getTutor = async (id: number) => {
    try {
      //const response = await axios.get('');
     const response = await apiGet(`/users/tutors/${id}/course`)
      console.log("response data is ", response.data);
      setOneTutor({
        avatar:
          "https://media.istockphoto.com/id/517322295/photo/businessman-icon-on-white-background.jpg?s=612x612&w=0&k=20&c=nblmvXxR-4huR6u9psWI8JGDQKw6ezlXX-p3wWtouSE=",
        name: "blessing",
        id: 1,
        courses: [
          {
            course_id: 109,
            title: "English for Beginners",
            cover_image: "",
            rating: 3.0,
          },
          {
            course_id: 132,
            title: "Intermediate Arabic",
            cover_image: "",
            rating: 4.0,
          },
          {
            course_id: 189,
            title: "Wood work for Junior Secondary School",
            cover_image: "",
            rating: 4.6,
          },
          {
            course_id: 409,
            title: "Carpentry for Senior Secondary School",
            cover_image: "",
            rating: 4.6,
          },
        ],
        rating: 3.0,
      });
      setOpenModal(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllTutor();
  }, [checkkeyword]);

  const checkIfSearchEmpty = () => {
    if(keyword == ""){
      setCheckKeyword(!keyword)
    }
  }

  const [searchSubmitted, setSearchSubmitted] = useState(false)

  const submitSearch = async () => {
    try{ 
    const response =  await apiGet(`/users/all-tutors?query=${keyword}`)
      console.log(response.data.findTutor);
      setTutor(response.data.findTutor);
      setSearchSubmitted(true)
      navigate(`/all-tutors/${keyword}`)
    } catch (error) {
      console.log(error);
    }
  }
  const showMore = () => {
    setShow((previousState) => !previousState);
  };

  const showMoreBtn = () => {
    setReadMore(readMore + 3);
  };

  const backToAllCourses = () => {
    navigate(-1)
    setSearchSubmitted(false)
    setKeyword("")
    getAllTutor()
  }

  const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    submitSearch();
  }
};

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
   
    setKeyword(e.currentTarget.value)
    submitSearch()
    if(keyword === ""){
      getAllTutor()
    }
  }
  // (e)=>setKeyword(e.target.value)
  return (
    <>
      <NavBar/>
      
          <div className="allTutorsContainer">
          <div className="allTutors-header">
        <h1>All Tutors</h1>
         <div className="allTutor-inputField">
           <input
              className="unique_all_courses_search"
             type="text"
             value={keyword}
             placeholder="Search"
             onChange={handleChange}
             onKeyPress={(e)=>handleKeypress(e)}
           /> 
         </div>  
        </div>
        <div className="allTutors-body">
          <h1>Our Tutors</h1>
          <div className="allTutors-cardContainer">
            {tutors.slice(0, firstNos).map((tutor)=>(
                <div className="allTutors-card">
                  <div className="allTutor-img">
                    <img src={tutor.image ? tutor.image : avatar} alt="tutor.img" />
                    <div className="allTutors-subBody">
                      <div>{tutor.name}</div>
                      <div><Rating rating={tutor.rating} image={""} color={""}/>{}</div>
                      <Link to={`/tutorCourse/${tutor.id}`}>
                      <div><button type="submit" >See courses</button></div>
                      </Link>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          {firstNos == 6 ?
            <button className="seemoretutors" onClick={()=>setFirstNos(100)}>see more</button> :
            <button className="seemoretutors" onClick={()=>setFirstNos(6)}>see less</button>
          }
          
        </div>
      </div>
        
    </>
  )
    // <>
    // <NavBar />
    // <div className="allTutor-Container">
    //   <div className="allTutor-header">
    //     <h1>All Tutors</h1>
    //     <div className="allTutor-inputField">
    //       <input
    //         className="unique_all_courses_search"
    //         type="text"
    //         value={keyword}
    //         placeholder="Search"
    //         onChange={handleChange}
    //         onKeyPress={(e)=>handleKeypress(e)}
    //       /> 
    //     </div>  
    //   </div>

    //   <div className="allTutor-subContainer">
    //     <h1 className="unique_our_tutors">Our Tutors</h1>
    //       <div className="allTutors-card">
    //         {keyword && searchSubmitted ? <button onClick={backToAllCourses} className="backtoallcourses">Back</button> : null  }
    //         {tutors.slice(0, readMore).map((tutor: any, index: number) => {
    //           return (
    //             <div key={index} className="allTutor-cardContainer">
    //               <div className="allTutor-actualCard">
    //               <div className="allTutor-avatar">
    //                 <img
    //                   className="unique_tutor_avatar"
    //                   src={tutor.image != "" ? tutor.image:  "https://media.istockphoto.com/id/517322295/photo/businessman-icon-on-white-background.jpg?s=612x612&w=0&k=20&c=nblmvXxR-4huR6u9psWI8JGDQKw6ezlXX-p3wWtouSE="}
    //                   alt=""
    //                 />
    //               </div>
    //               <div className="unique_tutor_details">
    //                 <p className="unique_tutor_name">{tutor.name}</p>
    //                 <button
    //                   className="unique_see_tutor_courses_button"
    //                   onClick={() => {
    //                     getTutor(tutor.id);
    //                   }}
    //                 >
    //                   See courses
    //                 </button>

    //                 <div className="unique_tutor_rating_container">
    //                   <div className="unique_rating_text_container">
    //                     <span>{tutor.rating}</span>
    //                   </div>

    //                   <div className="unique_tutor_rating_stars_container">
    //                     <div className="unique_tutor_rating_star1">
    //                       <img src={coloredStar} alt="" />
    //                       <img src={star} alt="" />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               </div>
    //               {/* {show &&
    //                 tutor.courses.map((c: any, index: number) => (
    //                   <div className="unique_all_courses_details">
    //                     <div
    //                       key={c.course_id}
    //                       className="unique_all_courses_img"
    //                     >
    //                       <img src={c.cover_image} alt="unique_course_logo" />
    //                     </div>
    //                     <h3>{c.title}</h3>

    //                     <h3>
    //                       {c.rating}
    //                       <span>({index})</span>
    //                     </h3>
    //                   </div>
    //                 ))} */}
    //             </div>
    //           );
    //         })}
    //       </div>

    //       {openModal && <Modal oneTutor={oneTutor} closeModal={setOpenModal} />}

    //       <div className="unique_see_more">
    //         <button className="unique_button_seee_more" onClick={showMoreBtn}>
    //           See more &#8964;
    //         </button>
    //       </div>
    //     </div>

    //  </div>
    // </>
  // );
};
export default AllTutor;
