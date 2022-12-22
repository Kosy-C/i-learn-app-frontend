import React from "react";
import Modal from "../Modal/Modal";
import "./ProfileModal.css";
import ellipse from "../../assets/ellipse.svg";
import { BiCategory } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { GrBook } from "react-icons/gr";
import { Link } from "react-router-dom";
import studentHistoryPage from "../studentHistoryPage/studentHistoryPage";

interface Props {
	userName: string;
	userEmail: string;
	userPicture: string;
}
const logout = () => {
	localStorage.clear();
};

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
                  <Link to={"/category"} className="categories">
                    <li>Category</li>
                  </Link>
                </div>
              </li>
              <li>
                <div className="mycourses-div">
                  <GrBook className="book-logo" />
                  <Link
                    to={"/history-page"}
                    className="mycourses"
                    onClick={studentHistoryPage}
                  >
                    <li>My Courses</li>
                  </Link>
                </div>
              </li>
              <div className="group">
                <li>
                  <div className="account-div">
                    <RiAccountCircleLine className="account-logo" />
                    <Link to={"/account"} className="account">
                      <li>Account</li>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="logout-div">
                    <FiLogOut className="logout-logo" />
                    <Link to={"/login"} className="logout" onClick={logout}>
                      <li> Logout</li>
                    </Link>
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
