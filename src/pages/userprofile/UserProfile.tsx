import React, { useEffect, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { HiOutlinePlusCircle } from 'react-icons/hi'
import { useNavigate, useParams } from 'react-router-dom'
import { apiGet, apiUpdate } from '../../utils/api/axios'
import CreateCourse from '../../components/tutorCreateCourseModal/createCourse'
import {Modal} from 'react-responsive-modal'
import { TutorModel, initialTutorState } from '../courseDetails/interface'
import { AiOutlineCamera } from 'react-icons/ai'
import NavBar from '../../components/navBar/navBar'
import './UserProfile.css'
import AreasOfInterest from '../../components/areasOfInterest/AreasOfInterest'
import { toast } from 'react-toastify'

const UserProfile = () => {

  const [user, setUser] = useState<TutorModel>(initialTutorState)
  const [areaOfInterests, setAreaOfInterests] = useState(false)
  const [upModalIsOpen, setUpModalIsOpen] = useState(false)
  const [formData, setFormData] = useState({})

  const [interests, setInterests] = useState<string[]>([])

  const params = useParams()

  useEffect(() => {
    const areas = JSON.parse(localStorage.getItem('areasOfInterest')!)
    if(areas){
        setInterests(areas)
    }
  }, [areaOfInterests])

  const navigate = useNavigate()

  useEffect(() => {
    const fecthUser = async () => {
      const { data } = await apiGet(
        `/users/atutordetail/${'0a60a4b9-1820-4035-8888-a43b3a2bd160'}`
      )
      setUser(data.message)
    }
    // const fecthStudent = async () => {
    //   const { data } = await apiGet(
    //     `/users/atutordetail/${'880833a0-a2c2-4665-b09b-c6bb74e11cb6'}`
    //   )
    //   setStudent(data.message)
    // }
    fecthUser()
    // fecthStudent()
  }, [])

  const handleChange = () => {
    setUpModalIsOpen(true)
    setAreaOfInterests(false)
  }

  const upGoBack = () => {
    navigate(-1)
  }

  const onChangeTutorEditProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value, "expertise": interests}) 
  }

  const onChangeStudentEditProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value, "areaOfInterest": interests}) 
  }

  const handleSubmitEditedProfile = async () => {
      const {data} = await apiUpdate("/users/edit-profile", formData)
      if(data){
        toast.success(data.message)
      }else{
        toast.error("There was an error, please try again")
      }
  }

  return (
    <>
    {user && user.userType === "Tutor" ? 
    <div className="up-parent-containing-div">
      <NavBar />
      <div className="up-button-back">
        <button type= 'button' onClick={upGoBack} className="up-back-direction">
          <FiArrowLeft /> Back
        </button>
      </div>

 {/* give "back" a link to go back */}

      <div className="up-second-container">
      <form>
        <div className="up-pictureAndName">
          <img src={user.image} alt="profile" />
          {/* <button> */}
          {/* <input type='file'/> */}
            <AiOutlineCamera className="up-camera-icon" />
          {/* </button> */}

          {/* <p>{user.name}</p> */}
          <p className='up-name'>{user.name}</p>
          {/* <button></button> */}
          {/* <img src={cameraicon} alt="icon" /> */}
        </div>

        <div className="up-profile">
          <h3 className="up-heading">Profile</h3>
        </div>

        
          <div className="up-formContainer">
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" name='name' onChange={onChangeTutorEditProfile}/>
            </div>
            {/* <div>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" name='email'/>
            </div> */}
            <div>
              <label>Location</label>
              <input type="text" placeholder="Enter Location" name='location' onChange={onChangeTutorEditProfile}/>
            </div>
            <div>
              <label>About</label>
              <input placeholder="Give a short bio" name='about' onChange={onChangeTutorEditProfile}/>
            </div>
            <div>
              <label>Area of Interest</label>
              <div >
                <AreasOfInterest interests={interests}
                    setInterests={setInterests} 
                />
                </div>
              <div className="up-add-area-of-interest">
                <button type='button' onClick={()=> handleChange() }>
                  <HiOutlinePlusCircle /> Add
                </button>
              </div>
            </div>
            <div className="up-submitButton">
              <button type="submit" onClick={handleSubmitEditedProfile}>Save</button>
            </div>
          </div>
        </form>
        <Modal open={upModalIsOpen} onClose={()=> setUpModalIsOpen(false)} center>
            <CreateCourse closeThisModal={setUpModalIsOpen} setAreaOfInterests={setAreaOfInterests}/>
        </Modal>
      </div>
    </div> :
    user && user.userType === "Student" ?
    <div className="up-parent-containing-div">
      <NavBar />
      <div className="up-button-back">
        <button type= 'button' onClick={upGoBack} className="up-back-direction">
          <FiArrowLeft /> Back
        </button>
      </div>

      <div className="up-second-container">
      <form>
        <div className="up-pictureAndName">
          <img src={user.image} alt="profile" />
            <AiOutlineCamera className="up-camera-icon" />
          {/* </button> */}

          {/* <p>{user.name}</p> */}
          <p className='up-name'>{user.name}</p>
          {/* <button></button> */}
          {/* <img src={cameraicon} alt="icon" /> */}
        </div>

        <div className="up-profile">
          <h3 className="up-heading">Profile</h3>
        </div>

        
          <div className="up-formContainer">
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" name='name' onChange={onChangeStudentEditProfile}/>
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" name='email' onChange={onChangeStudentEditProfile}/>
            </div>
            <div>
              <label>Area of Interest</label>
              <div >
                <AreasOfInterest interests={interests}
                    setInterests={setInterests} 
                />
                </div>
              <div className="up-add-area-of-interest">
                <button type='button' onClick={()=> handleChange() }>
                  <HiOutlinePlusCircle /> Add
                </button>
              </div>
            </div>
            <div className="up-submitButton">
              <button type="submit" onClick={handleSubmitEditedProfile}>Save</button>
            </div>
          </div>
        </form>
        <Modal open={upModalIsOpen} onClose={()=> setUpModalIsOpen(false)} center>
            <CreateCourse closeThisModal={setUpModalIsOpen} setAreaOfInterests={setAreaOfInterests}/>
        </Modal>
      </div>
       
    </div>: <p>Loading...</p>}
    </>
  )
}

export default UserProfile
