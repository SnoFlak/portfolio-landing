import IDEline from "./IDEline";
import IDELineTemplate from "./IDELineTemplate";
import Projects from "./Projects";
import Experience from "./Experience";

const IDEcontainer = () => {
    return(
        <div className="ide">
            <IDELineTemplate lineNum={1} lineCode={"// Lets work on something awesome together!"} isComment={true}/>
            <IDELineTemplate lineNum={2} />
            <IDEline num={3} firstWord={"function"} hasCollapse={true} lineText={" Projects () {"} collapseContent={Projects}/>
            <IDELineTemplate lineNum={16} />
            <IDEline num={17} firstWord={"function"} hasCollapse={true} lineText={" Experience () {"} collapseContent={Experience}/>
        </div>
    )
}

export default IDEcontainer;