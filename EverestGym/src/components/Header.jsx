import { useState } from "react";
import styles from "./css/Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <h2 className={styles.logo}>Everest Gym</h2>

      {/* Hamburger Menu Icon */}
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? styles.barOpen : ""}></span>
        <span className={isOpen ? styles.barOpen : ""}></span>
        <span className={isOpen ? styles.barOpen : ""}></span>
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#programs">Programs</a>
        </li>
        <li>
          <a href="#schedule">Schedule</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className={styles.mobileBtn}>
          <button className={styles.ctaBtn}>Join Now</button>
        </li>
      </ul>

      {/* Desktop CTA */}
      <button className={styles.ctaBtnDesktop}>Join Now</button>
    </nav>
  );
};

export default Header;
