import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {/* CONTACT COLUMN */}
        <div>
          <h3>Contact</h3>
          <p>Jordan Dooms</p>
          <p>Owner & CEO</p>
          <p>
            <a href="tel:8049216853">(804) 921-6853</a>
          </p>
          <p>
            <a href="mailto:info@thirdagetechnology.net">
              info@thirdagetechnology.net
            </a>
          </p>
        </div>

        {/* QUICK LINKS COLUMN */}
        <div className={styles.footerColumn}>
          <h3>Quick Links</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/scam-awareness">Scam Awareness</NavLink>
          <NavLink to="/mission">Our Mission</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* LOGO + COMPANY COLUMN */}
        <div className={styles.companyColumn}>
          <img
            src={logo}
            alt="Third Age Technology Logo"
            className={styles.footerLogo}
          />
          <h3>Third Age Technology, LLC</h3>
          <p className={styles.tagline}>“Keeping You Connected.”</p>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
