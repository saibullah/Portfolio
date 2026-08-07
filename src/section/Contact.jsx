import '../styles/Contact.css'
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const form = useRef()

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
    <section className="contact" id="contact">
      <div className="container">

        <div className="section-title">
          <span >CONTACT</span>
          <h2 className='text-white'>Let's Work Together</h2>
          <p className='text-success'>
            I'm currently open to internships and full-time
            opportunities. Feel free to get in touch.
          </p>
        </div>

        <div className="contact-container">

          <div className="contact-info">

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>mohamedsaibullah361@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt />
              <div>
                <h4>Phone</h4>
                <p>+91 73970 02053</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>Tamil Nadu, India</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/saibullah" target='_blank' rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/saibullah-s-7b44b23aa" target='_blank' rel="noreferrer"><FaLinkedin /></a>
            </div>

          </div>

          {!success ? (

            <form
              className="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >

              <input
                name="from_name"
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                name="from_email"
                type="email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          ) : (

            <div className="success-card">

              <div className="success-icon">
                ✓
              </div>

              <h3>Thank You!</h3>

              <p>
                Your message has been sent successfully.
                <br />
                I'll get back to you as soon as possible.
              </p>

              <button className='btn btn-success'
                onClick={() => setSuccess(false)}
              >
                Send Another Message
              </button>

            </div>

          )}
        </div>

      </div>
    </section>
  );
}

export default Contact;