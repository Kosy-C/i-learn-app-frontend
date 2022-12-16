import React from "react";
import StudentHistoryPage from "../../components/studentHistoryPage/studentHistoryPage";

import ResetPassword from "../ResetPassword/resetPassword";
import SetNewPassword from "../ResetPassword/setNewPassword";

const Home = () => {
	return (
		<><div>
			<ResetPassword />
			<SetNewPassword />
		</div><StudentHistoryPage /></>

	
	
	);
};

export default Home;
