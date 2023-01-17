import React from "react";
// import { apiGet } from "../../utils/api/axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CreateAvailability from "../../components/Availability/CreateAvailability";

// import axios from "axios";
import "./TutorHome.css";
import { User } from "../../utils/Interfaces/index.dto";

const TutorHeader = ({ tutor }: { tutor: User }) => {
	return (
		<div className="tutorMainContainer">
			<div className="tutorHeader">
				<div className="tutorHeader-img">
					<img className="tutor-Img" src={tutor.image} alt={tutor.image} />
				</div>

				<div className="tutorHeader-title">
					<h2>{tutor.name}</h2>
					<p>{tutor.email}</p>
				</div>
			</div>

			<div className="tab-Container">
				<Tabs>
					<TabList>
						<Tab className={"react-tabs__tab"}>Overview</Tab>
						<Tab className={"react-tabs__tab"}>My courses</Tab>
						<Tab className={"react-tabs__tab"}>Reviews</Tab>
						<Tab className={"react-tabs__tab"}>Bookings</Tab>
					</TabList>
					<div>
						<TabPanel>
							<div className="tutor-overview__container">
								<div className="tutor-overview-details">
									<p>
										Hello! I started my career working in Theatrical design in
										various entertainment areas. I switched to digital UX six
										years ago. Since then, I have been working in events,
										healthcare, cybersecurity, financial, and now I am working
										in Data Center Automation at AWS. In my free time, I hang
										with my dog, garden, tinker in my garage building weird
										things. I am an audiobook junkie and a voracious learner.
									</p>
								</div>
								<div className="tutor-overview-schedule"></div>
								<div className="create-avail">
									<CreateAvailability />
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<p>You have no courses yet</p>
						</TabPanel>
						<TabPanel>
							<p>You have no reviews yet</p>
						</TabPanel>
						<TabPanel>
							<p>You have no Bookings yet</p>
						</TabPanel>
					</div>
				</Tabs>
			</div>
		</div>
	);
};

export default TutorHeader;
