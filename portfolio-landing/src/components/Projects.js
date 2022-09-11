import IDELineTemplate from "./IDELineTemplate";
const Projects = () => {
    let StoreFrontCommentText = "// E-commerce storefront created using React.js, JSX, and CSS"
    let TaskmeisterCommentText = "// Calender with event tracking";
    let CalculatorCommentText = "// Calculator built with Typescript, HTML, CSS"
    return(
        <div className="ide-line">
            <IDELineTemplate lineNum={4} />
            <IDELineTemplate lineNum={5} lineCode={"// Click projects to view, hover to see a picture"} isComment={true} isIndented={true}/>
            <IDELineTemplate lineNum={6} />
            <div className="main-line-content">
                <div className="line-num">
                    <div className="line-num-container">
                        <p className="line-num-digit">7</p>
                    </div>
                </div>
                <div className="line-code">
                    <p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let</span> Storefront = <span style={{color: "cyan",}}>"E-Commerce Storefront"</span>;</p>
                </div>
            </div>

            <IDELineTemplate lineNum={8} lineCode={StoreFrontCommentText} isComment={true} isIndented={true}/>
            <IDELineTemplate lineNum={9} />

            <div className="main-line-content">
                <div className="line-num">
                    <div className="line-num-container">
                        <p className="line-num-digit">10</p>
                    </div>
                </div>
                <div className="line-code">
                    <p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let</span> Taskmeister = <span style={{color: "cyan",}}>"Task Calendar"</span>;</p>
                </div>
            </div>

            <IDELineTemplate lineNum={11} lineCode={TaskmeisterCommentText} isComment={true} isIndented={true}/>
            <IDELineTemplate lineNum={12} />

            <div className="main-line-content">
                <div className="line-num">
                    <div className="line-num-container">
                        <p className="line-num-digit">13</p>
                    </div>
                </div>
                <div className="line-code">
                    <p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let</span> Calculator = <span style={{color: "cyan",}}>"Calculator"</span>;</p>
                </div>
            </div>
            <IDELineTemplate lineNum={14} lineCode={CalculatorCommentText} isComment={true} isIndented={true}/>
            <IDELineTemplate lineNum={15} lineCode={<span style={{color: "#fefefe"}}>&#125;</span>}/>
        </div>
    )
}

export default Projects;