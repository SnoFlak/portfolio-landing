import MATHIAS from '../imgs/Mathias.png';
import Skills from './Skills.js';
const About = () => {
    return(
        <div className="about">
            <div className="about-text-container">
                <h2>About Mathias</h2>
                <div className="about-text">
                    <ul>
                        <li>Creative and artsy, with a deep drive to always be learning, I love creating things with technology!</li>
                        <li>Fast Learner with an attraction to critical thinking.</li>
                        <li>Always looking for opportunities to branch out and do something new, exciting, and challenging.</li>
                        <li>Humble, and dedicated to learning the most I can to a topic; Especially with other people as a team.</li>
                        <li>Enjoys a good slice of pizza every now and then.</li>
                    </ul>
                </div>
                <Skills />
            </div>
            <img src={MATHIAS} alt='Mathias Sletten with crossed arms' className="mathias"></img>
        </div>
    )
}

export default About;