import LINKEDIN from '../imgs/linkedIn.png';
import INSTAGRAM from '../imgs/instagram.png';
const Contact = () => {
    return(
        <div className="contact" id="contact">
            <h2 id="contact-title">Contact Mathias</h2>
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