// import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../Hero/Hero";
// import "./LandingPage.css";
// import logo from "../../assets/logo.png";

const LandingPage = () => {
	return (
		<div>
			<Hero mystyle={style} />
			<Footer />
		</div>
	);
};
const style = {
	border: ".1px solid grey",
};
// const newStyle = {
// 	src: `${logo}`,
// };
export default LandingPage;
