import {React,useState} from 'react'
import './NavBar.css'
import {Link} from 'react-scroll'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import menu from '../../assets/menu.png'
function NavBar() {
  const [showMenu, setshowMenu] = useState(false)
  return (
      <nav className='navbar'>
          <img src={logo} alt="Logo" className='logo' />
          <div className='desktopmenu'>
              <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>Home</Link>
              <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
              <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
               <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Connect</Link>
          </div>
      <button className='desktopMenuButton' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
          }}>
              <img src={contact} alt="contactButton" className='desktopMenuImg' />
              Contact Me
      </button>
           <img src={menu} alt="Menu" className='mobmenu' onClick={()=>setshowMenu(!showMenu)}/>
          <div className='navMenu' style={{display:showMenu?'flex':'none'}}>
              <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)} className='listItem'>Home</Link>
              <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)} className='listItem'>About</Link>
              <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)} className='listItem'>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)} className='listItem'>Connect</Link>
          </div>
    </nav>
  )
}

export default NavBar