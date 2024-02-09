import { Link } from 'react-router-dom'
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <span>&lt;h1&gt;</span>
                <h1>
                    Hi, 
                    I'm Andres,<br/>
                    junior developer
                </h1>
                <span>&lt;/h1&gt;</span>

                <h2>Frontend Developer - Backend Developer - Gamer - Reader</h2>
                <Link to="/react-portfolio/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home