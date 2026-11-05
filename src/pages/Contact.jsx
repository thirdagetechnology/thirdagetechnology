import styles from "./Contact.module.css";
import LargeLogo from "../assets/LargeLogo.png";

export default function Contact() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.contactContainer}>
        <div className={styles.logoSection}>
          <img
            src={LargeLogo}
            alt="Third Age Technology Logo"
            className={styles.logo}
          />
          <h2>THIRD AGE TECHNOLOGY</h2>
          <p className={styles.subtitle}>Support for Seniors</p>
          <div className={styles.infoSection}>
            <div>
              <h3>Call Us</h3>
              <a href="tel:8049216853">(804) 921-6853</a>
            </div>
            <div>
              <h3>Email Us</h3>
              <p>
                <a href="mailto:Jdooms@thirdage.tech">
                  Jdooms@thirdage.tech
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
