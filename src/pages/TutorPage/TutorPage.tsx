import { useState, useEffect } from "react";
import { requests } from "./mockReq";
import "./tutorPage.css";
import NavBar from "../../components/navBar/navBar";
import { apiGet } from "../../utils/api/axios";

interface Request {
  id: number;
  studentName: string;
  message: string;
  start_date: string;
  end_date: string;
  start_time: string;
  period: string;
  areaOfInterest: string;
}

const TutorNotification: React.FC = () => {
  const [notifications, setNotifications] = useState<Request[]>(requests);

  //   const getNotification = async () => {
  //     try {
  //       // const id = localStorage.getItem("id");
  //       // const { data } = await apiGet(`/get_bookings`);
  //       // setNotifications(data.requests);
  //
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   useEffect(() => {
  //     getNotification();
  //   }, []);

  return (
    <>
      <NavBar />
      <div className="tutor_container">
        <div className="tutor_notifications">
          {notifications.map((request: Request) => (
            <div className="tutor_notification" key={request.id}>
              <div className="tutor_title">
                <h2>Student Name: {request.studentName}</h2>
                <p className="message">Message: {request.message}</p>
                <p className="tutor_area_interest">
                  Area of interest: {request.areaOfInterest}
                </p>
                <p className="tutor_start_date">
                  Start date: {request.start_date}{" "}
                </p>
                <p className="tutor_end_date">
                  End date: {request.start_date}{" "}
                </p>
                <p className="date-time">Start time: {request.start_time}</p>
                <p className="date-time">Period: {request.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TutorNotification;
