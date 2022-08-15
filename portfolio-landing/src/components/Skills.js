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
            <h2>Skills</h2>
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