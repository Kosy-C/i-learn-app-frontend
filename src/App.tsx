import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import StudentHistoryPage from './components/studentHistoryPage/studentHistoryPage'
import SignUpForm from './components/signUp/signUp'
import LoginForm from './components/Login/Login'
import { ToastContainer } from 'react-toastify'
import LandingPage from './pages/LandingPage/LandingPage'
import NavBar from './components/navBar/navBar'
import Contact from './pages/Contact/Contact'
import ResetPassword from './pages/ResetPassword/resetPassword'
import SetNewPassword from './pages/ResetPassword/setNewPassword'
import AllTutor from './components/AllTutorComponent/AllTutor'
import Profile from './components/profileDetails/profile'
import AllCoursesPage from './pages/AllCourses/AllCourses'
import VerifyPage from './pages/VerifyPage/Verify'
import Reminder from './components/reminder/reminder'
import Calender from './components/calender/calender'
import SavedReminder from './components/savedReminder/savedReminder'

import Dashboard from "./components/Dashboard/Dashboard";
import PaymentSummaryPage from "./pages/paymentSummary/paymentSummary";
import RateCourses from "./pages/RateCourses/RateCourses";
// import Dataprovider from "./useContext/index";


function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/contact_us" element={<Contact />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/users/resetpassword" element={<SetNewPassword />} />
          <Route path="/tutor-profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history-page" element={<StudentHistoryPage />} />
          <Route path="/all-tutors" element={<AllTutor />} />
          <Route path="/all-courses" element={<AllCoursesPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/savedReminder" element={<SavedReminder />} />
          <Route path="/Payment-Summary" element={<PaymentSummaryPage title={''} price={''} imageUrl={''} />} />
          <Route path="/rate-course/:courseId" element={<RateCourses />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App
