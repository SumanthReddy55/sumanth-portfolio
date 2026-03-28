import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">

          {/* LEFT BOX */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:sumanthreddy550@gmail.com" data-cursor="disable">
                sumanthreddy550@gmail.com
              </a>
            </p>

            <h4>Education</h4>
            <p>MS in Computer Science – Clark University</p>
          </div>

          {/* SOCIAL */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/sumanthreddy550"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/sumanthreddymle/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            {/* Optional — remove if not needed */}
            <a
              href="#"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
          </div>

          {/* FOOTER */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sumanth Bommireddy</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;