import { Link, NavLink } from 'react-router-dom'
import Dino from '../../assets/images/Dino.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import './index.scss'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className='nav-bar'>
        <Link className='logo' to='/react-portfolio' onClick={() => setShowNav(false)}>
            <img src={Dino} alt='Logo'/>
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/react-portfolio"  onClick={() => setShowNav(false)}>
                <FontAwesomeIcon className='icon' icon={faHome}/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/react-portfolio/about"  onClick={() => setShowNav(false)}>
                <FontAwesomeIcon className='icon' icon={faUser}/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/react-portfolio/portfolio"  onClick={() => setShowNav(false)}>
                <FontAwesomeIcon className='icon' icon={faSuitcase}/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/react-portfolio/contact"  onClick={() => setShowNav(false)}>
                <FontAwesomeIcon className='icon' icon={faEnvelope}/>
            </NavLink>
            <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} size="3x" className='close-icon' />
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
        <FontAwesomeIcon className='hamburger-icon' icon={faBars} size="3x" onClick={() => setShowNav(true)}/>
    </div>
    )
}

export default Sidebar