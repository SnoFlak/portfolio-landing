import CSS from '../imgs/css3.png';
import GITHUB from '../imgs/github.png';
import HTML from '../imgs/html5.png';
import JS from '../imgs/js.png';
import NODE from '../imgs/node.png';
import REACT from '../imgs/react.png';
import CHROME from '../imgs/chrome.png';
const Skills = () => {
    return(
        <div className="skills" id="skills">
            <div className="banner-container">
                    <div className="banner-top" style={{backgroundColor: '#FA8334'}}>
                        <h2>Skills</h2>
                    </div>
                    <div className="banner-fold" style={{backgroundColor: '#C75305'}}></div>
                    <div className="banner-bottom" style={{background: 'linear-gradient(to right, #FA8334, rgba(254,254,254,0.1) 45%'}}></div>
                </div>
            <div className="skills-container">
                <ul className="skills-imgs">
                    <li>
                        <img src={CSS} alt="css logo"></img>
                    </li>
                    <li>
                        <img src={HTML} alt="html logo"></img>
                    </li>
                    <li>
                        <img src={JS} alt="js logo"></img>
                    </li>
                    <li>
                        <img src={REACT} alt="react logo"></img>
                    </li>
                    <li>
                        <img src={GITHUB} alt="github logo"></img>
                    </li>
                    <li>
                        <img src={NODE} alt="node logo"></img>
                    </li>
                    <li>
                        <img src={CHROME} alt="chrome logo"></img>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;