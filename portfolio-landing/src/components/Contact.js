import LINKEDIN from '../imgs/linkedIn.png';
import INSTAGRAM from '../imgs/instagram.png';
const Contact = () => {
    return(
        <div className="contact" id="contact">
            <div className="banner-container">
                    <div className="banner-top" style={{backgroundColor: '#53226D'}}>
                        <h2>Contact</h2>
                    </div>
                    <div className="banner-fold" style={{backgroundColor: '#3B184E'}}></div>
                    <div className="banner-bottom" style={{background: 'linear-gradient(to right, #53226D, rgba(254,254,254,0.1) 45%'}}></div>
                </div>
            <div className="contact-info">
                <a href="mailto:mathiasasletten@gmail.com">mathiasasletten@gmail.com</a>
                <a href="tel:701-600-9009">(701) 600-9009</a>
                <div className="socials">
                <a href="https://www.linkedin.com/in/mathias-sletten-4472531b4/"><img src={LINKEDIN} alt="linkedin"></img></a>
                <a href="https://www.instagram.com/mesplenda/"><img src={INSTAGRAM} alt="instagram"></img></a>
            </div>
            </div>
        </div>
    )
}

export default Contact;