import React, { useEffect, useState } from "react";
import ellipse from "../../assets/ellipse.svg";
import Card from "../CardModal/Card";
import "./Notification.css";

interface NotificationM {
  id: number;
  message: string;
  date: string;
}

const Notification: React.FC = () => {
  // const [notifications, setNotifications] = useState<Notification[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch("/api/notifications");
  //       const data = await response.json();
  //       setNotifications(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <p>Loading notifications...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }
  return (
    <div>
      <Card>
        <div className="notification-user">
          <img src={ellipse} alt="userImage" />
          <div className="notification-profile">
            <h1>John Doe</h1>
            <p>20 mins ago</p>
            <div className="notification-message">
              <p>Has accepted your study request</p>
            </div>
          </div>
        </div>
        <hr className="notification-line" />
        <div className="notification-user">
          <img src={ellipse} alt="userImage" />
          <div className="notification-profile">
            <h1>John Doe</h1>
            <p>10 mins ago</p>
            <div className="notification-message">
              <p>Has accepted your study request</p>
            </div>
          </div>
        </div>
        <hr className="notification-line" />
        <div className="notification-user">
          <img src={ellipse} alt="userImage" />
          <div className="notification-profile">
            <h1>John Doe</h1>
            <p>1 day ago</p>
            <div className="notification-message">
              <p>Has accepted your study request</p>
            </div>
          </div>
        </div>
        <hr className="notification-line" />
        <div className="notification-user">
          <img src={ellipse} alt="userImage" />
          <div className="notification-profile">
            <h1>John Doe</h1>
            <p>2 days ago</p>
            <div className="notification-message">
              <p>Has accepted your study request</p>
            </div>
          </div>
        </div>
        <hr className="notification-line" />
        <div className="notification-user">
          <img src={ellipse} alt="userImage" />
          <div className="notification-profile">
            <h1>John Doe</h1>
            <p>2 days ago</p>
            <div className="notification-message">
              <p>Has accepted your study request</p>
            </div>
          </div>
        </div>
        <hr className="notification-line" />
      </Card>
    </div>
  );
};

export default Notification;
