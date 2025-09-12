import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import style from "./css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        {/* Logo / Brand */}
        <div className={style.footerBrand}>
          <h2>Everest Gym</h2>
          <p>Building strength, one day at a time.</p>
        </div>

        {/* Quick Links */}
        <div className={style.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/subscriptions">Subscriptions</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={style.footerSocial}>
          <h3>Follow Us</h3>
          <div className={style.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/everest_fitness_hub?utm_source=ig_web_button_share_sheet&igsh=MTIzaG16Mm1rd2MwaA=="
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={style.footerBottom}>
        <p>© {new Date().getFullYear()} MyFitness. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
