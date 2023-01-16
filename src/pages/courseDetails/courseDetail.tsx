import { useState, useEffect } from 'react'
import './courseDetail.css'
import Rating from '../../components/Rating/Rating'
import { Link, useParams } from 'react-router-dom'
import { apiGet } from '../../utils/api/axios'
import { CourseModel } from './interface'
import { initialCourseState } from './interface'


const CourseDetail = () => {
  const [modal, setModal] = useState(false)
  const [course, setCourse] = useState<CourseModel>(initialCourseState)
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  const params = useParams()
  
  useEffect(() => {
    const getCourseDetail = async () => {
      const { data } = await apiGet(`/courses/get-course/${params.id}`)
      setCourse(data.course)
      console.log(course.rating)
    }
    getCourseDetail()
  }, [])

  

  return (
    <>
    <Link to='/all-courses'>
    <button className="cd-rate_course_arrowButton">&#8249; Go Back</button>
    </Link>
    
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
          <Rating rating={Number(course.rating)} image={''} color={''}/>
        </div>
        <p>Updated {new Date(course.createdAt).toLocaleString('en-NG')}</p>

        <p>{`N${course.pricing}`}</p>
      </div>

      <div className="cd-tutor-container">
        <p className="cd-tutor-title">About the Tutor</p>
        <div className="cd-tutor-profile">
          <img src={course.tutor.image && course.tutor.image} alt="tutor" />
          <div className="cd-name-courses">
            <span className="cd-tutor-name">{course.tutor.name}</span>
            <span className="course-no">62 Courses</span>
          </div>
        </div>
        <p className="cd-about-tutor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nibh quam
          odio sit vestibulum sagittis urna.
        </p>
      </div>

      <div className="cd-time-container">
        <div className='ratings-container'>
            <p className="cd-ratings">Ratings</p>
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
          <button className="cal-button">
            Pay Now
          </button>
        </div>
    </div>
    
    </>
  )
}

export default CourseDetail
