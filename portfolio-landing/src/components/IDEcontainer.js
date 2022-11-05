import IDEline from "./IDEline";
import IDELineTemplate from "./IDELineTemplate";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

const IDEcontainer = () => {

    return(
        <div className="ide">
            <IDELineTemplate lineNum={1} lineCode={"// Lets work on something awesome together!"} isComment={true}/>
            <IDELineTemplate lineNum={2} lineCode={"// Click a function to expand."} isComment={true}/>
            <IDEline num={3} firstWord={"function"} hasCollapse={true} lineText={" Projects () {"} collapseContent={Projects}/>
            <IDELineTemplate lineNum={16} />
            <IDEline num={17} firstWord={"function"} hasCollapse={true} lineText={" Experience () {"} collapseContent={Experience}/>
            <IDELineTemplate lineNum={35} />
            <form id="contact-form">
                <IDEline num={36} firstWord={"function"} hasCollapse={true} lineText={" Contact () {"} collapseContent={Contact}/>
            </form>
        </div>
    )
}

export default IDEcontainer;