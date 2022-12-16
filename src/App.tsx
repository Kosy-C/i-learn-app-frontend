import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import SignUpForm from "./components/signUp/signUp";
import LoginForm from "./components/Login/Login";
// import Footer from "./components/Footer/Footer";

import LandingPage from "./pages/LandingPage/LandingPage";
import NavBar from "./components/navBar/navBar";
import Contact from "./pages/Contact/Contact";

import ResetPassword from "./pages/ResetPassword/resetPassword";
import SetNewPassword from "./pages/ResetPassword/setNewPassword";

function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />

					<Route path="/navbar" element={<NavBar />} />
					<Route path="/contact_us" element={<Contact />} />
					<Route path="/sign-up" element={<SignUpForm />} />
					<Route path="/login" element={<LoginForm />} />
					<Route path="/reset-password" element={<ResetPassword />} />
					<Route path="/users/resetpassword" element={<SetNewPassword />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
