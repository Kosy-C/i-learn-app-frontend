/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState, useEffect } from "react";
import FeaturedTutors from "../FeaturedTutors/FeaturedTutors";
import RecommendedCourses from "../RecommendedCourses/RecommendedCourses";
import SubNavbar from "../SubNavbar/SubNavbar";
import NavBar from "../navBar/navBar";
import "./Dashboard.css";
import TutorHome from "../TutorHome/TutorHome";

import { apiGet } from '../../utils/api/axios'
import { User } from '../../utils/Interfaces/index.dto'
import Profile from '../profileDetails/profile'

const Dashboard = () => {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState<Boolean>(true)
  const loggedInUser = async () => {
    // const { data } = await apiGet('/users/profile')
    const { data } = await apiGet('/users/all-tutors')
    setUser(data.userDetails)
    setLoading(false)
  }
  const setNavbarText = () => {
    if (user?.userType === 'Student') {
      return {
        username: user?.name || 'John Doe',
        welcomeText: 'welcome',
      }
    } else {
      return {
        username: undefined,
        welcomeText: undefined,
      }
    }
  }

  // <Profile id= {}/>

  useEffect(() => {
    return () => {
      loggedInUser()
    }
  }, [])
  return (
    <div>
      <NavBar />
      <SubNavbar
        name={setNavbarText().username}
        welcome={setNavbarText().welcomeText}
      />
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <>
          {user?.userType === 'Tutor' ? (
            <>
              <TutorHome tutor={user} />
            </>
          ) : (
            <div className='container'>
              <FeaturedTutors />
              <RecommendedCourses />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Dashboard;

