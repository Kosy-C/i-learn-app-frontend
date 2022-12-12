import {useState} from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
import {FaBars} from 'react-icons/fa'
import { ImCross } from "react-icons/im"

const NavBar = () => {
  const [Mobile, setMobile] = useState(false)

  const logout = () => {
    localStorage.clear()
  }
  const getSignature = localStorage.getItem("signature")
  
  return (
    <nav className='navbar'>
      <div className='logotext'>
        <img src='src/assets/images/fulllogo.svg'/> 
        <h3>
        iLearn
        </h3>
      </div>

      
      <ul className={Mobile ? "nav-links-mobile" : "navlinks"} onClick={() => setMobile(false)}> 

      {
        !getSignature ? (<>

         <Link to={'/tutors'} className='tutors'>
        <li> Tutors</li>
        </Link>

        <Link to={'/about'} className='about'>
        <li> About Us</li>
        </Link>

        <li>|</li>

        <Link to={'/login'} className='login'>
        <li> Login</li>
        </Link>

        <Link to={'/getstarted'} className='getstarted'>
        <li> Get Started</li>
        </Link>

        </>) : (<>

        <Link to={'/dashboard'} className='dashboard'>
        <li> Dashboard</li>
        </Link>
      
      
         <Link to={'/reminder'} className='reminder'>
        <li> Reminder</li>
          </Link>
      
      
        <Link to={'/notification'} className='notification' >
        <li> Notification</li>
         </Link>

        <Link to={'/login'} onClick={logout} >
        <li> Notification</li>
         </Link>

        </>)
      }
      
   
      
      <li>
        <img src='src/assets/images/profilepic.svg'/> 
      </li>

      </ul>

      <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
      {Mobile ? <ImCross /> : <FaBars />}
      </button>

    </nav>
  )
}

export default NavBar