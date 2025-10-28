import styles from "./Home.module.css";
import heroImg from "../assets/DeskTopHero.png";
import OurPromise from "../assets/OurPromise.jpg";
import { useNavigate } from "react-router-dom";
// Icons
import BugIcon from "../assets/Icons/BugIcon.png";
import CheckDiscIcon from "../assets/Icons/CheckDiscIcon.png";
import CleanIcon from "../assets/Icons/CleanIcon.png";
import LaptopIcon from "../assets/Icons/LaptopIcon.png";
import PhoneTabletIcon from "../assets/Icons/PhoneTabletIcon.png";
import ProjectorIcon from "../assets/Icons/ProjectorIcon.png";
import ShieldMonitorIcon from "../assets/Icons/ShieldMonitorIcon.png";
import SsdIcon from "../assets/Icons/ssdIcon.png";
import TrashIcon from "../assets/Icons/TrashIcon.png";

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

import ServiceCard from "../components/ServiceCard";

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

const services = [
  {
    name: "Device Repair",
    icon: PhoneTabletIcon,
    description:
      "Screen and battery replacement, charging port repair, and setup assistance for phones, tablets, and computers.",
  },
  {
    name: "Device Cleaning",
    icon: CleanIcon,
    description:
      "Gentle cleaning for screens, ports, and keyboards to improve performance and hygiene.",
  },
  {
    name: "Software Setup",
    icon: CheckDiscIcon,
    description:
      "App installation, updates, and personalized setup for devices of all kinds.",
  },
  {
    name: "Hardware Installation",
    icon: LaptopIcon,
    description:
      "Help connecting printers, smart devices, or Wi-Fi networks safely and securely.",
  },
  {
    name: "Hardware Disposal",
    icon: TrashIcon,
    description:
      "Secure device wiping, eco-friendly recycling, and donation preparation.",
  },
  {
    name: "Technology Lessons",
    icon: ProjectorIcon,
    description:
      "Friendly 1-on-1 lessons for phones, tablets, and computers — learn at your pace.",
  },
  {
    name: "Scam Awareness",
    icon: ShieldMonitorIcon,
    description:
      "Learn how to spot scams, protect passwords, and stay safe online.",
  },
  {
    name: "Device Decluttering",
    icon: SsdIcon,
    description:
      "Organize files, clear old data, and speed up your devices effortlessly.",
  },
  {
    name: "Virus & Malware Removal",
    icon: BugIcon,
    description:
      "Full system cleanup, protection setup, and safe browsing guidance.",
  },
];
export default function Home() {
  const navigate = useNavigate();
  const handleQuoteClick = () => {
    navigate("/contact");
  };
  return (
    <main className={styles.home}>
      {/* ---------- HERO ---------- */}
      <section className={styles.hero}>
        <img
          src={heroImg}
          alt="Elderly couple using technology"
          className={styles.heroImg}
        />
        <div className={styles.heroContent}>
          <h1>Empowering Seniors Through Technology</h1>
          <p>
            Compassionate, patient, and personalized support for 55+
            communities.
          </p>
          <button className={styles.heroBtn} onClick={handleQuoteClick}>
            Get a Quote
          </button>
        </div>
      </section>

      {/* ---------- ABOUT PREVIEW ---------- */}
      <section className={styles.about}>
        <h2>Why Us?</h2>
        <p>
          At Third Age Technology, we specialize in providing compassionate,
          senior-focused technology support to meet the unique challenges of
          older adults. With patience, respect, and hands-on guidance, we make
          technology simple, approachable, and empowering.
        </p>
      </section>

      {/* ---------- SERVICES PREVIEW ---------- */}
      <section className={styles.services}>
        <h2>What We Offer</h2>
        <p className={styles.subtitle}>
          Professional, safe, and easy-to-understand help for all your tech
          needs.
        </p>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </section>
      {/* ---------- SCAM SPOTLIGHT ---------- */}
      <section className={styles.scamSpotlight}>
        <h2>Scam Spotlight 🔍</h2>

        {(() => {
          // pick a random scam from your JSON
          const randomScam =
            scamData[Math.floor(Math.random() * scamData.length)];
          return (
            <div className={styles.spotlightCard}>
              <div className={styles.spotlightImageWrapper}>
                <img
                  src={scamIcons[randomScam.image]}
                  alt={randomScam.title}
                  className={styles.spotlightImage}
                />
              </div>
              <div className={styles.spotlightContent}>
                <h3>{randomScam.title}</h3>
                <p>{randomScam.description}</p>
                {randomScam.losses && (
                  <p className={styles.losses}>
                    <strong>Losses:</strong> {randomScam.losses}
                  </p>
                )}
                <p className={styles.advice}>
                  <strong>Tip:</strong> {randomScam.advice}
                </p>
                <a href="/scam-awareness" className={styles.learnMore}>
                  Learn more about scams →
                </a>
              </div>
            </div>
          );
        })()}
      </section>

      {/* ---------- TRUST / MISSION ---------- */}
      <section className={styles.mission}>
        <div className={styles.missionContent}>
          <div className={styles.missionText}>
            <h2>Our Promise</h2>
            <p>
              We believe everyone deserves access to friendly, patient, and
              honest technology support — without confusion or hidden costs.
            </p>
            <p>
              Our mission is simple: <strong>keep you connected</strong> to the
              people and things that matter most.
            </p>
          </div>
          <img
            src={OurPromise}
            alt="Younger Person Helping an Older Man use a computer"
            className={styles.ourPromiseImg}
          />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className={styles.cta}>
        <h2>Need help today?</h2>
        <button className={styles.ctaBtn} onClick={handleQuoteClick}>
          Request Service
        </button>
      </section>
    </main>
  );
}
