import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoT from '../../assets/images/logo-t-nav.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

let color = '#232946'


const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to ='/'>
        <img src={LogoT} alt="logo" />
        <img className='sub-logo' src={LogoSubtitle} alt="tahgio" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/" >
          <FontAwesomeIcon icon={faHome} color={color} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
          <FontAwesomeIcon icon={faUser} color={color} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
          <FontAwesomeIcon icon={faEnvelope} color={color} />
        </NavLink>
      </nav>
      <div className='list-cntner'>
      <ul>
        <li>
          <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/tahgio'>
            <FontAwesomeIcon icon={faLinkedin} color={color} />
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer' href='https://www.github.com/tahgio'>
            <FontAwesomeIcon icon={faGithub} color={color} />
          </a>
        </li>
      </ul>
      </div>
      </div>
  )
  
}

export default Sidebar