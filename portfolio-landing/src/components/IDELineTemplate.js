
const IDELineTemplate = ({lineNum, lineCode, isComment, isIndented}) => {
    let commentStyle = {}

    if (isComment === true) {
        commentStyle.color = "#404040";
    }

    return (
        <div className="main-line-content">
            <div className="line-num">
                <div className="line-num-container">
                    <p className="line-num-digit">{(lineNum !== undefined ? lineNum : <span>&nbsp;</span>)}</p>
                </div>
            </div>
            <div className="line-code">
                {
                    (lineCode !== undefined ? 
                    <p style={commentStyle}>{(isIndented === true ? <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> : "")}{lineCode}</p> 
                    : "")
                }
            </div>
        </div>
    )
}

export default IDELineTemplate;