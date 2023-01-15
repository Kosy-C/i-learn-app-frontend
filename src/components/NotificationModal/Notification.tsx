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
  const [pay, setPay] = useState("pay");
  const [payment, setPayment] = useState(true);
  const [notifs, setNotifs] = useState(posts);
  const params = useParams();

  const handleClick = (index: number, post: any) => {
    // setPay((index) => {
    //   if (index) {
    //     return "confirmed";
    //   }
    // });
    post.payment = "confirm";
    const newNotif = notifs;
    //console.log(notifs[index]);
    // const allPost = [...notifs.filter((notif, ind) => ind !== index), post];
    // console.log(post);
    setNotifs(newNotif);
    console.log(notifs);
    // if (index) {
    // 	setPayment(!payment);
    // }
  };
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
        {notifs.slice(0, 5).map((post: any, index) => {
          return (
            <>
              <div
                key={index}
                className="notification-user"
                style={
                  post.status === "unread"
                    ? { backgroundColor: "rgba(20, 168, 0, 0.05)" }
                    : { backgroundColor: "#ffffff" }
                }
              >
                <img src={post.image} alt="userImage" />
                <div className="notification-profile">
                  <h1>{post.name}</h1>
                  <p>{post.time}</p>
                  <div className="notification-message">
                    <p>{post.message}</p>
                  </div>
                </div>
                <button
                  className="notification-button"
                  onClick={() => handleClick(index, post)}
                >
                  {post.payment === "pending" ? "pay" : "confirm"}
                </button>
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
