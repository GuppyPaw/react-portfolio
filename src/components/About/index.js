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
            <p>
                I'm a very ambitious developer looking for a role in an
                established IT company with the opportunity to work with the latest
                technologies on challenging and diverse projects.
            </p>
            <p>
                I'm quiet confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
            </p>
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