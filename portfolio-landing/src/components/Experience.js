import IDELineTemplate from "./IDELineTemplate";

const Experience = () => {
    return(
        <div className="ide-line">
            <IDELineTemplate lineNum={18} />

            <div className="main-line-content">
                <div className="line-num">
                    <div className="line-num-container">
                        <p className="line-num-digit">19</p>
                    </div>
                </div>
                <div className="line-code">
                    <p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>GEN-E  = <span style={{color: "cyan",}}>"Developer"</span>;</p>
                </div>
            </div>

            <IDELineTemplate lineNum={20} lineCode={"// 4 months; Web Development, Software Engineering "} isIndented={true} isComment={true}/>
            <IDELineTemplate lineNum={21} lineCode={"// Engine debugging, created internal web tools for database management,"} isIndented={true} isComment={true}/>
            <IDELineTemplate lineNum={22} lineCode={"// Game testing and debugging, revamping code to become scalable."} isIndented={true} isComment={true}/>
            <IDELineTemplate lineNum={23} />

           <div className="main-line-content">
                <div className="line-num">
                    <div className="line-num-container">
                        <p className="line-num-digit">24</p>
                    </div>
                </div>
                <div className="line-code">
                    <p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Avarice Arts  = <span style={{color: "cyan",}}>"Developer / Designer"</span>;</p>
                </div>
            </div>

            <IDELineTemplate lineNum={25} lineCode={"// 2 years +; Game Development, UI / Audio Design"} isIndented={true} isComment={true}/>
            <IDELineTemplate lineNum={26} lineCode={"// Create Scalable and complex systems that work as a cohesive unit"} isIndented={true} isComment={true}/>
            <IDELineTemplate lineNum={27} lineCode={"// Document code base, Custom API's, Design UI, "} isIndented={true} isComment={true}/>
            <IDELineTemplate lineNum={28} lineCode={"// Using the latest technologies to produce the best product"} isIndented={true} isComment={true}/>
            <IDELineTemplate lineNum={29} />

            <div className="main-line-content">
                <div className="line-num">
                    <div className="line-num-container">
                        <p className="line-num-digit">30</p>
                    </div>
                </div>
                <div className="line-code">
                    <p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Computer Science  = <span style={{color: "cyan",}}>"Web Design / Software Engineering"</span>;</p>
                </div>
            </div>

            <IDELineTemplate lineNum={31} lineCode={"// 2 years; Highschool Student"} isIndented={true} isComment={true}/>
            <IDELineTemplate lineNum={32} lineCode={"// Study of Web: HTML5, CSS3, and Javascript"} isIndented={true} isComment={true}/>
            <IDELineTemplate lineNum={33} lineCode={"// Study of Java: Basics of networking, structure of Java"} isIndented={true} isComment={true}/>
            <IDELineTemplate lineNum={34} lineCode={<span style={{color: "#fefefe"}}>&#125;</span>} />
        </div>
    )
}

export default Experience;