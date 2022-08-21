import MATHIAS from '../imgs/Mathias.png';
import Skills from './Skills.js';
const About = () => {
    return(
        <div className="about">
            <div className="about-text-container">
                <div className="banner-container">
                    <div className="banner-top" style={{backgroundColor: '#AF3B6E'}}>
                        <h2>About Me</h2>
                    </div>
                    <div className="banner-fold" style={{backgroundColor: '#7A294C'}}></div>
                    <div className="banner-bottom" style={{background: 'linear-gradient(to right, #AF3B6E, rgba(254,254,254,0.1) 45%'}}></div>
                </div>
                <div className="about-text">
                    <ul>
                        <li>Creative and artsy, with a deep drive to always be learning, I love creating things with technology!</li>
                        <li>Fast Learner with an attraction to critical thinking.</li>
                        <li>Always looking for opportunities to branch out and do something new, exciting, and challenging.</li>
                        <li>Humble, and dedicated to learning the most I can on a topic; Especially with other people as a team.</li>
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