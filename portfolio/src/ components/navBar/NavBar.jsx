import {React} from 'react'
import './NavBar.css'
import {Link} from 'react-scroll'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
function NavBar() {
  return (
      <nav className='navbar'>
          <img src={logo} alt="Logo" className='logo' />
          <div className='desktopmenu'>
              <Link className='desktopMenuListItem'>Home</Link>
              <Link className='desktopMenuListItem'>About</Link>
              <Link className='desktopMenuListItem'>Portfolio</Link>
               <Link className='desktopMenuListItem'>Connect</Link>
          </div>
          <button className='desktopMenuButton'>
              <img src={contact} alt="contactButton" className='desktopMenuImg' />
              Contact Me
          </button>
    </nav>
  )
}

export default NavBar