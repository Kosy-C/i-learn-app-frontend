import { useState, useEffect } from "react";
import { tutorBookings } from "./mockReq";
import "./tutorPage.css";
import NavBar from "../../components/navBar/navBar";
import { apiGet } from "../../utils/api/axios";

interface Request {
  id: number;
  studentName: string;
  message: string;
  picked_date: string;
  picked_time: string;
}


const TutorNotification: React.FC = () => {
  const [notifications, setNotifications] = useState<Request[]>(tutorBookings);
  

  //   const getNotification = async () => {
  //     try {
  //       // const { data } = await apiGet(`/tutors/bookings`);
  //       // setNotifications(data.tutorBookings);
  //       // console.log(data.tutorBookings);
  //    
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
        <div className="tutor_bookings">
          <h2>All Bookings</h2>
        </div>
        <div className="tutor_notifications">
          {notifications.map((request: Request) => (
            <div className="tutor_notification" key={request.id}>
              <div className="tutor_title">
                <h2>Student Name: {request.studentName}</h2>
                <p className="message">Message: {request.message}</p>

                <p className="tutor_start_date">
                  picked date: {request.picked_date}{" "}
                </p>
                <p className="date-time">Picked time: {request.picked_time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TutorNotification;
