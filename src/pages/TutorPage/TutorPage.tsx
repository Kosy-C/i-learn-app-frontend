import { useState, useEffect } from "react";
import "./tutorPage.css";

import { apiGet } from "../../utils/api/axios";


interface Student {
  name: string[];
}
interface AvailableTime {
  availableTime: string[];
  availableDate: Date;
}
interface Request {
  id: string;
  tutorId: string;
  studentId: string;
  pickedTime: string;
  availabilityId: string;
  student: Student;
  availableTime: AvailableTime;
  message: string;
}

const TutorNotification: React.FC = () => {
  const [notifications, setNotifications] = useState<Request[]>([]);

  const getNotification = async () => {
    try {
      const { data } = await apiGet(`/users/tutors/bookings`);
      setNotifications(data.bookings);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNotification();
  }, []);

  new Date().toLocaleString("en-NG")
  return (
    <>
      <div className="tutor_container">
        <div className="tutor_bookings">
          <h2 className="tutor_heading2">All Bookings</h2>
        </div>
        <div className="tutor_notifications">
          {notifications.map((request: Request) => (
            <div className="tutor_notification" key={request.id}>
              <div className="tutor_title">
                <h2>Student Name: {request.student.name}</h2>
                <p className="date-time">Student Id: {request.studentId}</p>
                <p className="date-time">Tutor Id: {request.tutorId}</p>
                <p className="tutor_start_date">
                  Selected Date: { new Date(request.availableTime.availableDate).toLocaleString("en-NG").split(',')[0]}
                </p>
                <p className="date-time">Selected Time: {request.pickedTime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TutorNotification;
