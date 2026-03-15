import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:Princeya3103@gmail.com" data-cursor="disable">
                Princeya3103@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:8448954601" data-cursor="disable">
                8448954601
              </a>
            </p>
            <h4>Education</h4>
            <p>BCA IMSUC</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://drive.google.com/drive/folders/1QkW4aQm46aGqI4vlH6QIBBOUv_wT85wy"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Demo Drive <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rajesh-chityal-2a70141b3"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/raxx21_official"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/therajeshchityal"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Krishna Gupta</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
