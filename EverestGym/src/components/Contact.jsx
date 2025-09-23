import style from "./css/Contact.module.css";

const Contact = () => {
  return (
    <div className={style.contactSection}>
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you. Reach out using the form below or visit us!
      </p>

      <div className={style.contactContainer}>
        {/* Contact Form */}
        <div className={style.contactForm}>
          <form>
            <div className={style.inputGroup}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className={style.inputGroup}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={style.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Google Map */}
        <div className={style.contactMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d844.6819276043359!2d84.00600624928367!3d28.205053132066077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595d02114c803%3A0x14b3e79a2175167b!2sBidush%20Adikhari%20Store!5e1!3m2!1sen!2snp!4v1756558997830!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
