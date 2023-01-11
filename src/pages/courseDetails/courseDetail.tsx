import React,{useState} from 'react'
import './courseDetail.css'
import tutorpicture from '../../assets/tutorpicture.svg'
import ratingstar from '../../assets/ratingstar.svg'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import Rating from '../../components/Rating/Rating'
import Modal from '../../components/carlendarModal/CarlendarModal'


const CourseDetail = () => {
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
  return (
    <div className="cd-container">
      <h1 className="cd-heading"> About the course</h1>
      <div className="cd-course-container">
        <p>Python</p>
        <p className="cd-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nibh quam
          odio sit vestibulum sagittis urna. Velit fermentum, accumsan, egestas
          sit volutpat.
        </p>
        <div className="cd-rating">
          <Rating rating={4} image={ratingstar} />
        </div>
        <p>Updated 08/08/2022</p>

        <p>N1000/hour</p>
      </div>

      <div className="cd-tutor-container">
        <p className="cd-tutor-title">About the Tutor</p>
        <div className="cd-tutor-profile">
          <img src={tutorpicture} alt="tutor" />
          <div className="cd-name-courses">
            <span className="cd-tutor-name">Chukwudi Ifeanyi</span>
            <span className="course-no">62 Courses</span>
          </div>
        </div>
        <p className='cd-about-tutor'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nibh quam
          odio sit vestibulum sagittis urna.
        </p>
        <div className="cd-schedule-time">
        <BsFillCalendarDateFill className='cd-icon'/> 
        <p className="carlendar-icon">
         Schedule Time
        </p>
        </div>
      </div>

      <div className="cd-time-container">
      <p className="cd-ratings">
            Ratings(6)
      </p>
        <p className="rating-heading">
            Awesome Tutor
        </p>
        <p className="rating-body">
            excellent tutor does good very very well at all times great one
        </p>
        <p className="rating-heading2">
            Awesome Tutor
        </p>
        <p className="rating-body">
            excellent tutor does good very very well at all times great one
        </p>
        <div className="cd-buttons">
        <button className='cal-button' onClick={openModal}>Engage Tutor</button>
        <Modal modal={modal} closeModal={closeModal} />
      </div>
      </div>
    </div>
  )
}

export default CourseDetail
