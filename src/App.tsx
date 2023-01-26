import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import StudentHistoryPage from "./components/studentHistoryPage/studentHistoryPage";
import SignUpForm from "./components/signUp/signUp";
import LoginForm from "./components/Login/Login";
import { ToastContainer } from "react-toastify";
import LandingPage from "./pages/LandingPage/LandingPage";
import NavBar from "./components/navBar/navBar";
import Contact from "./pages/Contact/Contact";
import ResetPassword from "./pages/ResetPassword/resetPassword";
import SetNewPassword from "./pages/ResetPassword/setNewPassword";
import AllTutor from "./components/AllTutorComponent/AllTutor";
import Profile from "./components/profileDetails/profile";
import AllCoursesPage from "./pages/AllCourses/AllCourses";
import VerifyPage from "./pages/VerifyPage/Verify";
import Reminder from "./components/reminder/reminder";
import Calender from "./components/calender/calender";
import SavedReminder from "./components/savedReminder/savedReminder";
import CourseDetail from "./pages/courseDetails/courseDetail";
import Dashboard from "./components/Dashboard/Dashboard";
import PaymentSummaryPage from "./pages/paymentSummary/paymentSummary";
import RateCourses from "./pages/RateCourses/RateCourses";
import TutorRating from "./pages/RateTutor/RatingTutor";
import UserProfile from "./pages/userprofile/UserProfile";
import PaidCourses from "./pages/PaidCourses/PaidCourses";
import NotFound from "./pages/NotFound/NotFound";
import StudentProfile from "./pages/StudentProfile/StudentProfile ";
import DataProvider from "./useContext/index";


function App() {
	return (
		<React.Fragment>
			<DataProvider>
			<ToastContainer />
			<Router>
			{/* <NavBar/> */}
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/navbar" element={<NavBar />} />
					<Route path="/coursedetail/:id" element={<CourseDetail/>} />
					<Route path="/contact_us" element={<Contact />} />
					<Route path="/sign-up" element={<SignUpForm />} />
					<Route path="/login" element={<LoginForm />} />
					<Route path="/reset-password" element={<ResetPassword />} />
					<Route path="/users/resetpassword" element={<SetNewPassword />} />
					<Route path='/tutor-profile' element={<Profile />} />
					<Route path="/dashboard/:id?" element={<Dashboard />} />
					<Route path="/history-page" element={<StudentHistoryPage />} />
					<Route path="/all-tutors" element={<AllTutor />} />
					<Route path="/all-courses" element={<AllCoursesPage />} />
					<Route path="/verify" element={<VerifyPage />} />
					<Route path="/reminder" element={<Reminder />} />
					<Route path="/calender" element={<Calender />} />
					<Route path="/savedReminder" element={<SavedReminder />} />
					<Route path="/rate-course/:courseId" element={<RateCourses />} />
					<Route path="/tutorRating/:tutorId" element={<TutorRating />} />
					<Route path="/userprofile/:userid" element={<UserProfile/>} />
					<Route
							path="/Payment-Summary"
							element={
								<PaymentSummaryPage title={""} price={""} imageUrl={""} />
							}
						/>
						<Route path="/paid-courses/:id" element={<PaidCourses />} />
						<Route path="*" element={<NotFound />} />
						<Route path="/studentProfile" element={<StudentProfile />} />
				</Routes>
				</Router>
			</DataProvider>
		</React.Fragment>
	);
}

export default App;
