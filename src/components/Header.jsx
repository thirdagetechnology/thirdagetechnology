import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    setMenuOpen(false); // close mobile menu if open
    navigate("/contact");
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img
          src={logo}
          alt="Third Age Technology logo"
          className={styles.logo}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Desktop Navigation */}
      <nav className={`${styles.nav} ${menuOpen ? styles.showMobile : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/services" onClick={() => setMenuOpen(false)}>
          Our Services
        </NavLink>
        <NavLink to="/scam-awareness" onClick={() => setMenuOpen(false)}>
          Scam Awareness
        </NavLink>
        <NavLink to="/mission" onClick={() => setMenuOpen(false)}>
          About Us
        </NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>

        {/* Mobile CTA inside dropdown */}
        <div className={styles.mobileQuoteWrapper}>
          <button className={styles.quoteBtnMobile} onClick={handleQuoteClick}>
            Get a Quote
          </button>
        </div>
      </nav>

      <div className={styles.right}>
        {/* Desktop CTA */}
        <button className={styles.quoteBtn} onClick={handleQuoteClick}>
          Get a Quote
        </button>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
        </button>
      </div>
    </header>
  );
}
