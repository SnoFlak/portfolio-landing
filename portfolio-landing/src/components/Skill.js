import {skillIcons} from '../lib/skillIcons';

const Skill = ({animClass, icon}) => {

    const imageStyle = {
        backgroundImage: `url(${skillIcons[icon]})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        animationDelay: animClass || "0s",
    }

    return(
        <div className="skill-container" style={{animationDelay: animClass}}>
            <div style={imageStyle} className="skill"></div>
        </div>
    )
}

export default Skill;