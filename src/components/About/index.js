import { faPython, faCss3,faGitAlt, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
            <span>&lt;h1&gt;</span>
            <h1>
                About Me
            </h1>
            <span>&lt;/h1&gt;</span>
            <br/>
            <br/>
            <span>&lt;p&gt;</span>
            <p>
            I love programming from front to back, and I am looking to work in companies where I can grow as a programmer along with my peers
            </p>
            <p>
            I really enjoy: 
            <ul>
              <li>reading fantasy and science fiction #Bridge4</li>
              <li>playing video games like Bloodborne, Breath of the Wild and BioShock</li>
              <li>playing guitar and drums</li>
              <li>spending time with my family</li>
            </ul>
            </p>
            <span>&lt;/p&gt;</span>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython}/>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About