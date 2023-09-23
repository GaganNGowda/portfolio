import {React,useState} from 'react'
import './NavBar.css'
import {Link} from 'react-scroll'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
function NavBar() {
  const [showMenu, setshowMenu] = useState(false)
  return (
      <nav className='navbar'>
          <img src={logo} alt="Logo" className='logo' />
          <div className='desktopmenu'>
              <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>Home</Link>
              <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
              <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
              <Link  activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Education</Link>
               <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Connect</Link>
          </div>
      <button className='desktopMenuButton' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
          }}>
              <img src={contact} alt="contactButton" className='desktopMenuImg' />
              Contact Me
      </button>
          {!showMenu ? <MenuIcon className='mobmenu' fontSize='large' onClick={()=>setshowMenu(!showMenu)}/> : <MenuOpenIcon className='mobmenu' fontSize='large' onClick={()=>setshowMenu(!showMenu)}/> }
          <div className='navMenu' style={{display:showMenu?'flex':'none'}}>
              <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)} className='listItem'>Home</Link>
              <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)} className='listItem'>About</Link>
              <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)} className='listItem'>Portfolio</Link>
              <Link  activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500}  onClick={()=>setshowMenu(false)} className='listItem'>Education</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)} className='listItem'>Connect</Link>
          </div>
    </nav>
  )
}

export default NavBar