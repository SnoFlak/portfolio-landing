import {useState} from "react";

import EXPAND from "../imgs/expand.png";

const IDEline = ({hasCollapse, firstWord, lineText, num, isComment, collapseContent: CollapseContent}) => {
    let commentStyle = {}

    if (isComment === true) {
        commentStyle.color = "#404040";
    }

    const [collapseState, setCollapseState] = useState(true);

    const updateCollapseState = () => {
        setCollapseState(!collapseState);
    }

    return(
        <div className="ide-line">
            <div className="main-line-content">
                <div className="line-num">
                    <div className="line-num-container">
                        <p className="line-num-digit">{num || ""}</p>
                        {
                            (hasCollapse === true ? 
                                (collapseState === true ?
                                    <img src={EXPAND} alt="" className="collapse" onClick={updateCollapseState} style={{transform: "rotate(-90deg)"}}></img>
                                    : <img src={EXPAND} alt="" className="collapse" onClick={updateCollapseState} style={{transform: "rotate(0)"}}></img>
                                )
                                : ""
                            )
                        }
                    </div>
                </div>
                
                <div className="line-code" style={{cursor: "pointer"}} onClick={updateCollapseState}>
                    {
                        (lineText !== undefined ? 
                            <p style={commentStyle}><span>{firstWord}</span>{lineText}
                            {
                                (hasCollapse === true ?
                                    (collapseState === true ? "..." : "")
                                    :"")
                            }</p>
                            :""
                        )
                    }
                </div>
            </div>
            {
                (collapseState === true ? "": 
                    <div className="expanded-content">
                        {<CollapseContent /> || ""}
                    </div>
                )
            }
        </div>
    )
}

export default IDEline;