import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import StudentHistoryPage from "./components/studentHistoryPage/studentHistoryPage";
import SignUpForm from "./components/signUp/signUp";
import LoginForm from "./components/Login/Login";
import { ToastContainer } from "react-toastify";
import LandingPage from "./pages/LandingPage/LandingPage";
import NavBar from "./components/navBar/navBar";
import Contact from "./pages/Contact/Contact";
import ResetPassword from "./pages/ResetPassword/resetPassword";
import SetNewPassword from "./pages/ResetPassword/setNewPassword";
import AllCoursesPage from "./pages/AllCourses/AllCourses";
import VerifyPage from "./pages/VerifyPage/Verify";



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
					<Route path="/history-page" element={<StudentHistoryPage />} />
					<Route path="/all-courses" element={<AllCoursesPage />} />
					<Route path="/verify" element={<VerifyPage />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
