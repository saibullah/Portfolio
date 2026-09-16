import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_xaw0hsn",
        "template_vfggy4f",
        form.current,
        "8s75YdRvPUw92aJxW"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);

        setLoading(false);

        alert("Failed to send message.");
      });
  };

  return (
    <section className="contact-space" id="contact">

      <div className="contact-light"></div>

      <div className="container">

        {/* HEADER */}

        <div className="contact-header">

          <span>05 / CONTACT</span>

          <h2>
            Let's build
            <strong> something.</strong>
          </h2>

          <p>
            I'm currently open to internships and full-time
            opportunities. Feel free to get in touch.
          </p>

        </div>


        {/* CONTACT WORKSPACE */}

        <div className="contact-workspace">


          {/* LEFT SIDE */}

          <div className="contact-panel">

            <div className="panel-header">

              <div className="panel-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>CONTACT_INFO</span>

            </div>


            <div className="contact-items">

              <div className="contact-item">

                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <small>EMAIL</small>

                  <p>
                    mohamedsaibullah361@gmail.com
                  </p>
                </div>

              </div>


              <div className="contact-item">

                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>

                <div>
                  <small>PHONE</small>

                  <p>
                    +91 73970 02053
                  </p>
                </div>

              </div>


              <div className="contact-item">

                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <small>LOCATION</small>

                  <p>
                    Tamil Nadu, India
                  </p>
                </div>

              </div>

            </div>


            {/* SOCIAL */}

            <div className="contact-social">

              <span>CONNECT</span>

              <div>

                <a
                  href="https://github.com/saibullah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/saibullah-s-7b44b23aa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>


            <div className="availability">

              <span className="availability-dot"></span>

              <span>
                AVAILABLE FOR OPPORTUNITIES
              </span>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="message-panel">

            {!success ? (

              <form
                ref={form}
                onSubmit={sendEmail}
              >

                <div className="form-heading">

                  <small>NEW_MESSAGE</small>

                  <h3>
                    Send me a message
                  </h3>

                </div>


                <div className="input-group">

                  <label>
                    YOUR NAME
                  </label>

                  <input
                    name="from_name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />

                </div>


                <div className="input-group">

                  <label>
                    YOUR EMAIL
                  </label>

                  <input
                    name="from_email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />

                </div>


                <div className="input-group">

                  <label>
                    MESSAGE
                  </label>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  ></textarea>

                </div>


                <button
                  type="submit"
                  disabled={loading}
                >

                  {loading ? (
                    "SENDING..."
                  ) : (
                    <>
                      SEND MESSAGE
                      <FaPaperPlane />
                    </>
                  )}

                </button>

              </form>

            ) : (

              <div className="success-state">

                <div className="success-check">
                  ✓
                </div>

                <span>MESSAGE SENT</span>

                <h3>
                  Thank you!
                </h3>

                <p>
                  Your message has been sent successfully.
                  I'll get back to you as soon as possible.
                </p>

                <button
                  onClick={() => setSuccess(false)}
                >
                  SEND ANOTHER MESSAGE
                </button>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;