import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import StudentHistoryPage from "./components/studentHistoryPage/studentHistoryPage";


function App() {
	return (
		
		<React.Fragment>
			<Router>
				<Routes>
					
					<Route path="/history-page" element={<StudentHistoryPage/>} />

				</Routes>
			</Router>
		</React.Fragment>
		
		
	);
}

export default App;
