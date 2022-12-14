import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import SignUpForm from "./components/signUp/signUp";
// import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import NavBar from "./components/navBar/navBar";

function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />

					<Route path="/navbar" element={<NavBar />} />
					<Route path="/sign-up" element={<SignUpForm />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
