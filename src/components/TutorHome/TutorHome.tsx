import React from 'react'
import { useEffect, useState } from 'react'
import { apiGet } from '../../utils/api/axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import axios from 'axios'
import './TutorHome.css'
import { User } from '../../utils/Interfaces/index.dto'
import { Link } from 'react-router-dom'
import Card from '../Cards/course'

const TutorHeader = ({ tutor }: { tutor: User }) => {

  return (
    <div className='tutorMainContainer'>
      <div className='tutorHeader'>
        <div className='tutorHeader-img'>
          <img className='tutor-Img' src={tutor.image} alt={tutor.image} />
        </div>

        <div className='tutorHeader-title'>
          <h2>{tutor.name}</h2>
          <p>{tutor.email}</p>
        </div>
      </div>

      <div className='tab-Container'>
        <Tabs>
          <TabList>
            <Tab className={'react-tabs__tab'}>Overview</Tab>
           {/* <Link to= '../tutor-course-operations'> <Tab  className={'react-tabs__tab'}>Courses</Tab></Link> */}
            <Tab className={'react-tabs__tab'}>Courses</Tab>
           

            <Tab className={'react-tabs__tab'}>Reviews</Tab>
            <Tab className={'react-tabs__tab'}>Bookings</Tab>
          </TabList>
          <div>
            <TabPanel>
              <div className='tutor-overview__container'>
                <div className='tutor-overview-details'>
                  <p>
                    Hello! I started my career working in Theatrical design in
                    various entertainment areas. I switched to digital UX six
                    years ago. Since then, I have been working in events,
                    healthcare, cybersecurity, financial, and now I am working
                    in Data Center Automation at AWS. In my free time, I hang
                    with my dog, garden, tinker in my garage building weird
                    things. I am an audiobook junkie and a voracious learner.
                  </p>
                </div>
                <div className='tutor-overview-schedule'>
                  <h2>My Schedule</h2>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
            {/* Link to TutorCourseOperations page */}
              <Link to= '../tutor-course-operations'> <p className='add-course-btn' style={{
                color: 'black',
                backgroundColor: 'rgb(251,231,237)',
                padding: '5px',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '15%',
                textAlign: 'center',
                margin: 'auto',
                textUnderlineOffset: 'none',
              }}>
              Add Course</p>
              
            </Link>
            <div>
              {tutor?.courses && tutor?.courses.map((course) => {
                return (
                  <div key={course.id}>
                  <Card course={course}/>
                  </div>
                )
              }
              )}
            </div>
            </TabPanel>
            <TabPanel>
              <p>You have no reviews yet</p>
            </TabPanel>
            <TabPanel>
              <p>You have no Bookings yet</p>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default TutorHeader
