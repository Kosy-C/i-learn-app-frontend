import { useState, useEffect } from 'react'
import './courseDetail.css'
import tutorpicture from '../../assets/tutorpicture.svg'
import ratingstar from '../../assets/ratingstar.svg'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import Rating from '../../components/Rating/Rating'
import Modal from '../../components/carlendarModal/CarlendarModal'
import { useParams } from 'react-router-dom'
import { apiGet } from '../../utils/api/axios'
import { CourseModel, TutorModel } from './interface'


const CourseDetail = () => {
  const [modal, setModal] = useState(false)
  const [course, setCourse] = useState<CourseModel>({
    id: '',
    title: '',
    description: '',
    course_image: '',
    tutorId: '',
    pricing: '',
    category: '',
    course_material: '',
    rating: '',
    createdAt: '',
    updatedAt: '',
  })
  const [tutor, setTutor] = useState<TutorModel>({
    id: '',
    email: '',
    password: '',
    name: '',
    verified: '',
    salt: '',
    areaOfInterest: '',
    userType: '',
    image: '',
    rating: '',
    createdAt: '',
    updatedAt: '',
  })
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  const params = useParams()
  // /users/atutordetail/
  useEffect(() => {
    const getCourseDetail = async () => {
      const { data } = await apiGet(`/courses/requestCourse/${params.id}`)
      setCourse(data)
      console.log(course.course_image)
    }
    getCourseDetail()
  }, [])

  useEffect(() => {
    const getTutorDetail = async () => {
      const { data } = await apiGet(`/users/atutordetail/${params.tutorid}`)
      setTutor(data.message)
      console.log(tutor)
    }
    getTutorDetail()
  }, [])

  return (
    <>
      <div className='heading-border'>
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
        <h2 className='cd-title'>{course.title}</h2>
        <p className="cd-p">{course.description}</p>
        <div className="cd-rating">
          <Rating rating={4} image={ratingstar} />
        </div>
        <p>Updated {new Date(course.createdAt).toLocaleString('en-NG')}</p>

        <p>{`N${course.pricing}/hour`}</p>
      </div>

      <div className="cd-tutor-container">
        <p className="cd-tutor-title">About the Tutor</p>
        <div className="cd-tutor-profile">
          <img src={tutor.image ? tutor.image : tutorpicture} alt="tutor" />
          <div className="cd-name-courses">
            <span className="cd-tutor-name">{tutor.name}</span>
            <span className="course-no">62 Courses</span>
          </div>
        </div>
        <p className="cd-about-tutor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nibh quam
          odio sit vestibulum sagittis urna.
        </p>
        <div className="cd-schedule-time">
          <BsFillCalendarDateFill className="cd-icon" />
          <p className="carlendar-icon">Schedule Time</p>
        </div>
      </div>

      <div className="cd-time-container">
        <div className='ratings-container'>
            <p className="cd-ratings">Ratings(6)</p>
            <hr />
            <div className="rating-body">
                <p className="rating-heading">Awesome Tutor</p>
                <p>excellent tutor does good very very well at all times great one </p>
            </div>
            <hr />
            <div  className="rating-body">
                <p className="rating-heading">Awesome Tutor</p>
                <p>excellent tutor does good very very well at all times great one</p>
            </div>
        </div>
      </div>
        <div className="cd-buttons">
          <button className="cal-button" onClick={openModal}>
            Engage Tutor
          </button>
          <Modal modal={modal} closeModal={closeModal} />
        </div>
    </div>
    
    </>
  )
}

export default CourseDetail
