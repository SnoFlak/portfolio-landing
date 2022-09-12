import Skill from "./Skill.js";

const SkillsCarousel = () => {
    return(
        <div className="skills-carousel">
            <Skill animClass='-2s' icon="node"/>
            <Skill animClass='-4s' icon="chrome"/>
            <Skill animClass='-6s' icon="css3"/>
            <Skill animClass='-8s' icon="javascript"/>
            <Skill animClass='-10s' icon="react"/>
            <Skill animClass='-12s' icon="html5"/>
            <Skill animClass='-14s' icon="typescript"/>
            <Skill  animClass='0s' icon="github"/>
        </div>
    )
}

export default SkillsCarousel;
