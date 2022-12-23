import React from 'react';
import "../profileDetails/profile.css";
import Ellipse4 from "../../assets/images/Ellipse 4.svg";
import {AiOutlineSafetyCertificate} from "react-icons/ai"
import {CiLocationOn} from "react-icons/ci"


function Profile() {
    return (
        <>
        <body className='profile-body'>
        <div className='profile-container'>
                <div className='profile-head'>
                    <h2>Tutor Profile</h2>
                    <h2><button type="submit"></button></h2>
                </div>
                <hr />
                <div className='profile-tutor'>
                    <img src={Ellipse4} alt="avatar"  />
                    <div className='profile-tutor-details'>
                        <h2>Chukwu Di</h2>
                        <p> <AiOutlineSafetyCertificate className='certify-icon'/> Certified Tutor</p>
                        <p> <CiLocationOn/> Location</p>
                    </div>
                </div>
                <div className='profile-about'>
                    <h3>About</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quaerat quia id eum doloribus, unde aliquam. Magni, ratione. 
                        Magni vero animi id atque assumenda laudantium deserunt quam quisquam nam.
                        Nostrum, culpa?
                    </p>
                </div>
                <div className='profile-expertise'>
                    <h3>Expertise</h3>
                    <div>
                        <ul className='profile-expertise-list'>
                            <li>Physics</li>
                            <li>Physics</li>
                            <li>Coding</li>
                            <li>Music</li>
                        </ul>
                    </div>
                </div>
            </div>
        </body>
            
        </>
    );
}

export default Profile;