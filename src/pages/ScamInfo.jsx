import styles from "./ScamInfo.module.css";
import ScamSectionImg from "../assets/ScamSectionImg.png";
import scamData from "../scam.json";

import GovImposterScams from "../assets/ScamIcons/GovImposterScams.png";
import GrandChildEmergencyScam from "../assets/ScamIcons/GrandChildEmergencyScam.png";
import HomeOwners from "../assets/ScamIcons/HomeOwners.png";
import ObitScam from "../assets/ScamIcons/ObitScam.png";
import RomanceScams from "../assets/ScamIcons/RomanceScams.png";
import SweepStakesScam from "../assets/ScamIcons/SweepStakesScam.png";
import TelemarketingPhoneScams from "../assets/ScamIcons/TelemarketingPhoneScams.png";
import TextPhishingScam from "../assets/ScamIcons/TextPhishingScam.png";
import investmentScams from "../assets/ScamIcons/investmentScams.png";
import TechSupportFraud from "../assets/ScamIcons/TechSupportFraud.png";

const scamIcons = {
  investmentScams,
  TechSupportFraud,
  RomanceScams,
  GovImposterScams,
  GrandChildEmergencyScam,
  SweepStakesScam,
  TelemarketingPhoneScams,
  HomeOwners,
  TextPhishingScam,
  ObitScam,
};

export default function ScamInfo() {
  return (
    <main className={styles.scamInfo}>
      <section className={styles.headerSection}>
        <h1 className={styles.mobileHeader}>Scam Awareness</h1>
        <div className={styles.headerContent}>
          <img
            src={ScamSectionImg}
            alt="Scam Awareness Banner"
            className={styles.banner}
          />
          <div className={styles.headerText}>
            <h1>Scam Awareness</h1>
            <p>
              When it comes to fraud, retirees are frequent targets. If you’ve
              received a suspicious text, email, or social media message lately,
              you’re not alone — digital scams are on the rise. According to the
              FBI, Americans lost a record <strong>$16.6 billion</strong> to
              scammers last year.
            </p>
            <p>
              Older adults are particularly at risk, with Americans aged 60 and
              up reporting nearly <strong>$5 billion</strong> in losses in 2024.
              One reason for this increase is that AI tools have made it easier
              for criminals to craft convincing messages. However, technology
              also gives companies like Google new ways to issue real-time scam
              alerts to protect users.
            </p>
            <p>
              Staying informed — and having open conversations with friends and
              family — is one of the best defenses. Below are ten of the most
              common and costly scams to watch out for.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.scamGrid}>
        {scamData.map((scam, index) => (
          <article key={index} className={styles.scamCard}>
            <img
              src={scamIcons[scam.image]}
              alt={scam.title}
              className={styles.icon}
              loading="lazy"
            />

            <h2>{scam.title}</h2>
            <p className={styles.description}>{scam.description}</p>
            {scam.losses && (
              <p className={styles.losses}>
                <strong>Losses:</strong> {scam.losses}
              </p>
            )}
            <ul className={styles.warningSigns}>
              {scam.warningSigns.map((sign, i) => (
                <li key={i}>⚠️ {sign}</li>
              ))}
            </ul>
            <p className={styles.advice}>
              <strong>How to protect yourself:</strong> {scam.advice}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
