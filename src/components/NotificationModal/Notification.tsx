import React, { useEffect, useState } from "react";
import Card from "../CardModal/Card";
import "./Notification.css";
import { useParams } from "react-router-dom";
import { posts } from "./dataPosts";
import { apiGet } from "../../utils/api/axios";

interface NotificationM {
  name: string;
  description: string;
  time: string;
  status: string;
  image: string;
}

const Notification: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationM[]>([]);

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiGet(`/users/notifications/${params.id}`);
        const data = response.data;
        console.log(data);
        setNotifications(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Card>
        {notifications.slice(0, 5).map((notification: NotificationM, index) => {
          return (
            <>
              <div
                key={index}
                className="notification-user"
                style={
                  notification.status === "unread"
                    ? { backgroundColor: "rgba(20, 168, 0, 0.05)" }
                    : { backgroundColor: "#ffffff" }
                }
              >
                <img src={notification.image} alt="userImage" />
                <div className="notification-profile">
                  <h1>{notification.name}</h1>
                  <p>{notification.time}</p>
                  <div className="notification-message">
                    <p>{notification.description}</p>
                  </div>
                </div>
              </div>
              <hr className="notification-line" />
            </>
          );
        })}
      </Card>
    </div>
  );
};
export default Notification;
