import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './student.css'
import chem from '../../assets/chem.jpg'
import maths from '../../assets/maths.jpg'
import axios from 'axios'



const studentHistoryPage = () => {
    const params = useParams<{id: string}>()
    const [courses, setCourses] = useState<any>([])
        const getHistory = async () => {
            const id = localStorage.getItem('id')
            const {data} = await axios.get(`http://localhost:5000/student/history/${id}`)
            setCourses(data.courses)
        }  
        useEffect(() => {
            getHistory()   
    }, [params.id])
    
  return (
    <>
    {courses.map((course:any) => {

      
return <div className='container'>
            <div className='header'>
                <h2>My Courses</h2>
            </div>
            <div className='card-container'>
                <div className='card'>
                    <img src={chem} alt="" className='img_container' />
                    <div className='card-details'> 
                        <div className='subj'>
                            <h3> <b>{course.title}<br/> {course.subtitle}</b></h3>
                            {/* <h3> <b>Chemistry for beginners:<br/>30 days perfection</b></h3> */}
                            <span > <button type="submit"> Rate Tutor</button></span>
                        </div>
                        <div className='student-details'>
                            <p>{course.tutorName}</p>
                            {/* <p>Adekunle Ayo</p> */}
                            <p className='progressbar'></p>
                            <p>Your progress</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>

            
        </div>
    })} 
    

    </>
    
  )
}

export default studentHistoryPage