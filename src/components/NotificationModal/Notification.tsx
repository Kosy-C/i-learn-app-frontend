import React, { useEffect, useState } from "react";
import Card from "../CardModal/Card";
import "./Notification.css";
import { apiGet } from "../../utils/api/axios";
import avatar from "../../assets/";
import moment from "moment";
moment().format();

interface NotificationM {
  description: string;
  createdAt: string;
  status: string;
  theSender: {
    image: string;
    name?: string;
  };
}

const Notification: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationM[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiGet(`/users/notifications`);
        const data = response.data;
        console.log(data.notifications);
        setNotifications(data.notifications);
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
                <img
                  src={
                    notification.theSender.image === undefined
                      ? notification.theSender.image
                      : avatar
                  }
                  alt="userImage"
                />
                <div className="notification-profile">
                  <h1>{notification.theSender.name}</h1>
                  <p>{moment().startOf("date").fromNow()}</p>
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
