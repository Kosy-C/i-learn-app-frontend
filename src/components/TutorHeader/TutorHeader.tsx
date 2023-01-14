import React from 'react'
import { useEffect, useState } from 'react'
import { apiGet } from '../../utils/api/axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import axios from 'axios'
import './TutorHome.css'

const TutorHeader = () => {
  const [tutor, setTutor] = useState<any>([])

  const getUser = async () => {
    const response = await axios.get('https://randomuser.me/api')
    setTutor(response.data.results)
    console.log(response.data.results)
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <div className='tutorMainContainer'>
      <div className='tutorHeader'>
        <div className='tutorHeader-img'>
          <img
            className='tutor-Img'
            src={tutor[0]?.picture.large}
            alt={tutor[0]?.picture.large}
          />
        </div>

        <div className='tutorHeader-title'>
          <h2>Amy Adams</h2>
          <p>{tutor[0]?.email}</p>
        </div>
      </div>

      <div className='tab-Container'>
        <Tabs>
          <TabList>
            <Tab className={'react-tabs__tab'}>Overview</Tab>
            <Tab className={'react-tabs__tab'}>My courses</Tab>
            <Tab className={'react-tabs__tab'}>Reviews</Tab>
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
              <p>You have no courses yet</p>
            </TabPanel>
            <TabPanel>
              <p>You have no reviews yet</p>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default TutorHeader
