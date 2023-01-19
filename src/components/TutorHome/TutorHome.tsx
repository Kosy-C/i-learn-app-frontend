/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from "react";
// import { apiGet } from "../../utils/api/axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CreateAvailability from "../../components/Availability/CreateAvailability";
import TutorAvailability from "../../components/Availability/ShowAvailabilty";
import { Modal } from "react-responsive-modal";
import avatar from "../../assets/avatar.jpeg";
import TutorCreateForm from "../../pages/TutorCourseOperations/TutorCourseOperations";
// import { Link } from "react-router-dom";
import Card from "../Cards/course";
import Button from "../Button/Button";
// import { toast } from "react-toastify";
import "./TutorHome.css";
import { User } from "../../utils/Interfaces/index.dto";

const TutorHeader = ({ tutor, userProps }: { tutor: User; userProps: {} }) => {
	const [available, setAvailability] = useState(false);
	const onOpenAvailability = () => setAvailability(true);
	const onCloseAvailability = () => setAvailability(false);
	const [profile, setProfile] = useState(false);
	const onOpenProfile = () => setProfile(true);
	const onCloseProfile = () => setProfile(false);
	console.log("tutor is ", tutor);
	
	const handleFormSubmit = () => {};

	return (
		<div className="tutorMainContainer">
			<div className="tutorHeader">
				<div className="tutorHeader-img">
					<img
						className="tutor-Img"
						src={tutor.image !== "" ? tutor.image : avatar}
						alt={tutor.image}
					/>
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
						{/* <Link to= '../tutor-course-operations'> <Tab  className={'react-tabs__tab'}>Courses</Tab></Link> */}
						<Tab className={"react-tabs__tab"}>Courses</Tab>

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
									<TutorAvailability
										id={tutor.id}
										tutor={tutor}
										title={"Set Availability"}
										onClick={onOpenAvailability}
									/>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							{/* Link to TutorCourseOperations page */}
							{/* <Link to="/tutor-course-operations"> */}
							<div className="tutorHome_addContainer">
								<Button
									type="submit"
									onClick={onOpenProfile}
									title={"Add Course"}
									className={"tutorHome_addButton"}
								/>
							</div>
							<Modal open={profile} onClose={onCloseProfile}>
								<TutorCreateForm />
							</Modal>
							{/* </Link> */}
							<div className="tutor_home_courseCard">
								{tutor?.courses &&
									tutor?.courses.map((course) => {
										return (
											<div className="tutor_home_singleCard" key={course.id}>
												<Card
													course={course}
													allCourses={tutor?.courses}
													setProps={userProps}
												/>
											</div>
										);
									})}
							</div>
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
			<div>
				<Modal open={available} onClose={onCloseAvailability}>
					<CreateAvailability closeModal={onCloseAvailability} />
				</Modal>
			</div>
		</div>
	);
};

export default TutorHeader;
