import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import Notification from '../NotificationModal/Notification'
import Profile from '../profileDetails/profile'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import ProfileModal from '../ProfileModal/ProfileModal'

const NavBar = () => {
  const [Mobile, setMobile] = useState(false)
  const [notificationModal, setNotificationModal] = useState(false)
  const [profile, setProfile] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const myRef = useRef(null)

  const onOpenModal = () => {
    setNotificationModal(true)
  }

  const onCloseModal = () => setNotificationModal(false)

  // const toggleModal = () => {
  // 	setNotificationModal(!notificationModal);
  // };
  const togglePopup = () => {
    setShowModal(!showModal)
  }
  const logout = () => {
    localStorage.clear()
  }
  const getSignature = localStorage.getItem('signature')

  return (
    <nav className='navbar'>
      <div ref={myRef}></div>
      <div className='logotext'>
        <img src='src/assets/images/fulllogo.svg' />
        <h3>iLearn</h3>
      </div>

      <ul
        className={Mobile ? 'nav-links-mobile' : 'navlinks'}
        onClick={() => setMobile(false)}
      >
        {getSignature === null ? (
          <>
            <Link to={'/tutors'} className='nav-link'>
              <li> Tutors</li>
            </Link>

            <Link to={'/about'} className='nav-link'>
              <li> About Us</li>
            </Link>

            <Link to={'/login'} className='nav-link'>
              <li> Login</li>
            </Link>

            <Link to={'/getstarted'} className='nav-link'>
              <li> Get Started</li>
            </Link>
          </>
        ) : (
          <>
            <Link to={'/dashboard'} className='nav-link'>
              <li> Dashboard</li>
            </Link>

            <Link to={'/reminder'} className='nav-link'>
              <li> Reminder</li>
            </Link>
            <li>
              <button onClick={onOpenModal}>
                {notificationModal && <Notification />}Notification
              </button>
              <Modal
                open={notificationModal}
                onClose={onCloseModal}
                showCloseIcon={false}
                classNames={{
                  modal: 'customModal',
                }}
                styles={{
                  overlay: { display: 'none' },
                  closeButton: { display: 'none' },
                }}
                container={myRef.current}
              >
                <Notification />
              </Modal>
            </li>
          </>
        )}

        {/* <li>
					<button type="submit" onClick={onOpenProfile}>
						<img
							src="src/assets/images/profilepic.svg"
							className="profilepic"
						/>
					</button>
					<Modal open={profile} onClose={onCloseProfile}>
						<Profile />
					</Modal>
				</li> */}
        <li>
          <button onClick={togglePopup}>
            {showModal && (
              <ProfileModal userName={''} userEmail={''} userPicture={''} />
            )}
            <img
              src='src/assets/images/profilepic.svg'
              className='profilepic'
            />
          </button>
        </li>
      </ul>

      <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  )
}

export default NavBar
