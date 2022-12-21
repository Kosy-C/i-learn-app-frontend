import React, { useEffect, useState } from "react";
// import notImage from "../../assets/images/notImage.svg";
import Card from "../CardModal/Card";
import "./Notification.css";
import { posts } from "./dataPosts";
// import { Direction } from "react-toastify/dist/utils";

// interface NotificationM {
//   name: string;
//   message: string;
//   time: string;
// }

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
        {posts.map((post: any, index) => {
          return (
            <>
              <div key={index} className="notification-user">
                <img src={post.image} alt="userImage" />
                <div className="notification-profile">
                  <h1>{post.name}</h1>
                  <p>{post.time}</p>
                  <div className="notification-message">
                    <p>{post.message}</p>
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
