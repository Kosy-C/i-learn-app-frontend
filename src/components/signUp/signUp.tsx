import React, { Fragment, ChangeEvent, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../signUp/signUp.css'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import logo from '../../assets/logo.png'
import { signInWithGooglePopup } from '../../utils/firebaseAuth/firebase'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const baseUrl = import.meta.env.SERVER_URL

type formFieldType = {
  userType: string
  email: string
  password: string
  password2: string
  interest: string
}

const formField: formFieldType = {
  userType: '',
  email: '',
  password: '',
  password2: '',
  interest: '',
}

function SignUpForm() {
  const googleSignIn = async () => {
    await signInWithGooglePopup()
  }
  const handleChange = async (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault()
    const { name, value } = event.target
    setFormDetails({ ...formDetails, [name]: value })
  }
  const [show, setShow] = useState(false)

  const display = () => {
    setShow(!show)
  }

  const [formDetails, setFormDetails] = useState(formField)
  const { userType, email, password, password2, interest } = formDetails
  const [formError, setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    console.log(formError)
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formDetails)
    }
  }, [formError])

  const validate = (values: formFieldType) => {
    const errors: formFieldType = {
      userType: '',
      email: '',
      password: '',
      interest: '',
      password2: '',
    }
    if (!values.userType) {
      errors.userType = 'User Type is required'
    }
    if (!values.email) {
      errors.email = 'Email is required'
    }
    if (!values.password) {
      errors.password = 'Password is required'
    }
    if (!values.interest) {
      errors.interest = 'Area of Interest is required'
    }
    return errors
  }

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      setFormError(validate(formDetails))
      setIsSubmit(true)
    } catch (err: any) {
      toast.error(err.response.data.Error)
    }
  }
  return (
    <Fragment>
      <div className='formContainer'>
        <div className='logo'>
          <div>
            <img src={logo} alt='Logo' />
          </div>
          <div>
            <h2>iLearn</h2>
          </div>
        </div>
        <div>
          <div className='formBody'>
            <div className='formHead'>
              <h2>Create an account </h2>
              <p>Create your account to connect with students</p>
            </div>
            <form onSubmit={handleSubmit} className='formInputs'>
              <div>
                <label className='formLabel' id='userType'>
                  User Type
                </label>
                <select
                  id='userType'
                  name='userType'
                  value={userType}
                  onChange={handleChange}
                >
                  <option value=''>Select</option>
                  <option value='Tutor'>Tutor</option>
                  <option value='Student'>Student</option>
                </select>
              </div>

              <div className='formLabel'>
                <label>Email</label>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  placeholder='Enter your email'
                />
              </div>

              <div className='formLabel'>
                <label>Password</label>
                <input
                  type='password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                  placeholder='Enter your password...'
                />
              </div>

              <div className='formLabel'>
                <label id='interest'>Area of Interest</label>
                <select
                  id='interest'
                  name='interest'
                  value={interest}
                  onChange={handleChange}
                >
                  <option value=''>Select</option>
                  <option value='Tutor'>Mathematics</option>
                  <option value='physics'>Physics</option>
                  <option value='coding'>Coding</option>
                  <option value='graphics'>Graphics design</option>
                  <option value='video'>Video Editing</option>
                  <option value='chemistry'>Chemistry</option>
                  <option value='digital'>Digital Marketing</option>
                </select>
              </div>

              <button type='submit' className='signUp-button'>
                Sign Up
              </button>
              <div className='formAlt'>
                Already have an account?
                <Link to='/login' className='login-link'>
                  Login
                </Link>
              </div>
              <div className='socialIcons'>
                <button type='submit' onClick={() => googleSignIn}>
                  <FcGoogle />
                </button>
                <button type='submit' className='fbBtn'>
                  <FaFacebook />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default SignUpForm
