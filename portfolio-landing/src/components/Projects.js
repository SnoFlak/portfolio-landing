import IDELineTemplate from "./IDELineTemplate";

const Projects = () => {
    let StoreFrontCommentText = "// E-commerce storefront created using React.js, JSX, and CSS"
    let TaskmeisterCommentText = "// Calender with event tracking";
    let CalculatorCommentText = "// Book Shelving App for current/future reads using React.js"

    return(
        <div className="ide-line">
            <IDELineTemplate lineNum={4} />
            <IDELineTemplate lineNum={5} lineCode={"// Click projects to view"} isComment={true} isIndented={true}/>
            <IDELineTemplate lineNum={6} />
            <div className="main-line-content">
                <div className="line-num">
                    <div className="line-num-container">
                        <p className="line-num-digit">7</p>
                    </div>
                </div>
                <div className="line-code">
                    <a href="https://superlative-licorice-d48052.netlify.app/"><p id="storefront"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let</span> Storefront = <span style={{color: "cyan",}}>"E-Commerce Storefront"</span>;</p></a>
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
                <a href="https://hilarious-blancmange-be3eaf.netlify.app/"><p id="taskmeister"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let</span> Taskmeister = <span style={{color: "cyan",}}>"Task Calendar"</span>;</p></a>
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
                    <a href="https://vocal-vacherin-1171ad.netlify.app/"><p id="calculator"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let</span> MyReads = <span style={{color: "cyan",}}>"Bookshelf"</span>;</p></a>
                </div>
            </div>
            <IDELineTemplate lineNum={14} lineCode={CalculatorCommentText} isComment={true} isIndented={true}/>
            <IDELineTemplate lineNum={15} lineCode={<span style={{color: "#fefefe"}}>&#125;</span>}/>
        </div>
    )
}

export default Projects;