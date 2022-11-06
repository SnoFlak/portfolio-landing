import IDELineTemplate from "./IDELineTemplate";

const Contact = () => {
    return(
        <div className="ide-line" id="contact">
            <IDELineTemplate lineNum={37} />
                <div className="main-line-content">
                    <div className="line-num">
                        <div className="line-num-container">
                            <p className="line-num-digit">38</p>
                        </div>
                    </div>
                    <div className="line-code">
                        <p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>name: <input className="text-field" type="text" name="user_name" placeholder="Enter name here..."></input></p>
                    </div>
                </div>
                <IDELineTemplate lineNum={39} />
                <div className="main-line-content">
                    <div className="line-num">
                        <div className="line-num-container">
                            <p className="line-num-digit">40</p>
                        </div>
                    </div>
                    <div className="line-code">
                        <p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>email: <input className="text-field" type="text" name="user_email" placeholder="Enter Email here..."></input></p>
                    </div>
                </div>
                <IDELineTemplate lineNum={41} />
                <div className="main-line-content">
                    <div className="line-num">
                        <div className="line-num-container">
                            <p className="line-num-digit">42</p>
                        </div>
                    </div>
                    <div className="line-code">
                        <div style={{display: 'flex', flexDirection: "row"}}>
                            <p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>message:</p>
                            &nbsp;<textarea className="text-field" type="text" name="message" placeholder="Type your message here..."></textarea>
                        </div>
                        <div>
                            <input className="submit-form-button" type="submit" value="SEND"></input>
                        </div>
                    </div>
                </div>
                <IDELineTemplate lineNum={43} lineCode={<span style={{color: "#fefefe"}}>&#125;</span>}/>
        </div>
    )
}

export default Contact;