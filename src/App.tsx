import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
