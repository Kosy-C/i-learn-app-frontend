import React from "react";
import Modal from "../Modal/Modal";
import "./ProfileModal.css";
import ellipse from "../../assets/ellipse.svg";
import { BiCategory } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { GrBook } from "react-icons/gr";

interface Props {
  userName: string;
  userEmail: string;
  userPicture: string;
}

const ProfileModal: React.FC<Props> = ({
  userName,
  userEmail,
  userPicture,
}) => {
  return (
    <div>
      <Modal>
        <div className="profile-modal">
          <div className="profile-profile">
            <img src={ellipse} alt="" className="profile-pic" />
            <div className="profile-name">
              <p className="user-name">John Doe</p>
              <p className="user-email">johndoe@gmail.com</p>
            </div>
          </div>
          <div className="profile-line"></div>
          <div className="list">
            <ul>
              <li>
                <div className="category">
                  <BiCategory className="bicategory" />
                  <a href="/categories" className="categories">
                    Category
                  </a>
                </div>
              </li>
              <li>
                <div className="mycourses-div">
                  <GrBook className="book-logo" />
                  <a href="/mycourses" className="mycourses">
                    My courses
                  </a>
                </div>
              </li>
              <div className="group">
                <li>
                  <div className="account-div">
                    <RiAccountCircleLine className="account-logo" />
                    <a href="/account" className="account">
                      {" "}
                      Account
                    </a>
                  </div>
                </li>
                <li>
                  <div className="logout-div">
                    <FiLogOut className="logout-logo" />
                    <a href="/logout" className="logout">
                      Logout
                    </a>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileModal;
