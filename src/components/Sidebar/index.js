import { Link, NavLink } from 'react-router-dom'
import Dino from '../../assets/images/Dino.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Dino} alt='Logo'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon className='icon' icon={faHome}/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon className='icon' icon={faUser}/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon className='icon' icon={faEnvelope}/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/andresolverarodriguez/'>
                    <FontAwesomeIcon className='icon' icon={faLinkedin}/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/GuppyPaw'>
                    <FontAwesomeIcon className='icon' icon={faGithub}/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar