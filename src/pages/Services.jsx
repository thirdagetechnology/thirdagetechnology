import styles from "./Services.module.css";
import ServicesHero from "../assets/ServicesHero.jpg";
import { useNavigate } from "react-router-dom";

import PhoneTabletIcon from "../assets/Icons/PhoneTabletIcon.png";
import CleanIcon from "../assets/Icons/CleanIcon.png";
import CheckDiscIcon from "../assets/Icons/CheckDiscIcon.png";
import LaptopIcon from "../assets/Icons/LaptopIcon.png";
import TrashIcon from "../assets/Icons/TrashIcon.png";
import ProjectorIcon from "../assets/Icons/ProjectorIcon.png";
import ShieldMonitorIcon from "../assets/Icons/ShieldMonitorIcon.png";
import SsdIcon from "../assets/Icons/ssdIcon.png";
import BugIcon from "../assets/Icons/BugIcon.png";

const services = [
  {
    name: "Device Repair",
    icon: PhoneTabletIcon,
    tagline: "Helping your devices feel new again.",
    details: [
      {
        title: "Smartphones",
        desc: "Apple (iPhone) and Android devices — screen replacement, battery replacement, charging port repair, software troubleshooting, and setup assistance.",
      },
      {
        title: "Tablets & iPads",
        desc: "Screen and battery replacement, connectivity issues, and app troubleshooting.",
      },
      {
        title: "Computers & Laptops",
        desc: "Windows and Mac — slow performance fixes, virus removal, data backup, system updates, and hardware repairs.",
      },
      {
        title: "Accessories & Peripherals",
        desc: "Help with printers, webcams, speakers, and other connected devices.",
      },
    ],
  },
  {
    name: "Device Cleaning",
    icon: CleanIcon,
    tagline: "Keeping your tech spotless and functional.",
    details: [
      {
        title: "Charging Port Cleaning",
        desc: "Remove dust, lint, and debris that can cause charging issues.",
      },
      {
        title: "Screen & Display Cleaning",
        desc: "Gentle, streak-free cleaning to improve visibility and reduce germs.",
      },
      {
        title: "Camera & Lens Cleaning",
        desc: "Restore photo and video clarity by removing buildup from front and rear lenses.",
      },
      {
        title: "Keyboard & Touchscreen Sanitizing",
        desc: "Disinfect and clean commonly touched surfaces for better hygiene.",
      },
      {
        title: "General Dust & Debris Removal",
        desc: "Careful cleaning of tablets, phones, and computers to keep them running smoothly.",
      },
    ],
  },
  {
    name: "Software Setup",
    icon: CheckDiscIcon,
    tagline: "Setup made simple.",
    details: [
      {
        title: "App Installation & Setup",
        desc: "Assistance installing and setting up programs, games, and communication apps like Zoom, Facebook, or email.",
      },
      {
        title: "Operating System Updates",
        desc: "Ensuring devices are up to date and running the latest versions of iOS, Android, Windows, or macOS.",
      },
      {
        title: "Account Setup & Login Help",
        desc: "Creating and managing accounts, passwords, and sign-ins securely.",
      },
      {
        title: "Settings & Preferences",
        desc: "Adjusting display, sound, accessibility, and privacy settings for ease of use.",
      },
      {
        title: "Troubleshooting & Testing",
        desc: "Verifying that everything is installed correctly and working as expected.",
      },
    ],
  },
  {
    name: "Hardware Installation",
    icon: LaptopIcon,
    tagline: "We make your setup stress-free.",
    details: [
      {
        title: "New Device Setup",
        desc: "Assistance setting up new phones, tablets, computers, or smart devices.",
      },
      {
        title: "Peripheral Installation",
        desc: "Connecting and configuring printers, keyboards, mice, speakers, and webcams.",
      },
      {
        title: "Wi-Fi & Network Setup",
        desc: "Helping devices connect securely to the internet or local networks.",
      },
      {
        title: "Smart Home Devices",
        desc: "Setup and connection for smart TVs, voice assistants, and other connected gadgets.",
      },
      {
        title: "Data Transfer & Backup",
        desc: "Moving files, photos, and contacts safely from old devices to new ones.",
      },
    ],
  },
  {
    name: "Hardware Disposal",
    icon: TrashIcon,
    tagline: "Safe, secure, and sustainable disposal.",
    details: [
      {
        title: "Device Collection & Removal",
        desc: "Pickup and transport of old phones, tablets, computers, and accessories.",
      },
      {
        title: "Data Wiping & Security",
        desc: "Securely erasing personal information before recycling or disposal.",
      },
      {
        title: "Electronics Recycling",
        desc: "Ensuring devices and components are properly recycled to reduce waste.",
      },
      {
        title: "Donation Preparation",
        desc: "Helping identify and prepare working devices for donation to community programs or families in need.",
      },
      {
        title: "Environmentally Friendly Practices",
        desc: "Partnering with certified recyclers to minimize environmental impact.",
      },
    ],
  },
  {
    name: "Technology Lessons",
    icon: ProjectorIcon,
    tagline: "Learn at your own pace — with patience and care.",
    details: [
      {
        title: "Smartphone & Tablet Basics",
        desc: "Understanding touchscreens, apps, settings, and updates.",
      },
      {
        title: "Staying Connected",
        desc: "Using email, texting, video calls, and social media safely.",
      },
      {
        title: "Online Safety & Scam Awareness",
        desc: "Recognizing fraud, protecting passwords, and staying secure online.",
      },
      {
        title: "Entertainment & Everyday Use",
        desc: "Streaming music or movies, online shopping, and digital photo sharing.",
      },
      {
        title: "Custom Sessions",
        desc: "Lessons built around the specific interests or needs of your community.",
      },
    ],
  },
  {
    name: "Scam Awareness",
    icon: ShieldMonitorIcon,
    tagline: "Stay safe and confident online.",
    details: [
      {
        title: "Common Scams",
        desc: "Phone, email, text message, and online scams targeting older adults.",
      },
      {
        title: "Warning Signs",
        desc: "How to spot red flags before giving out personal information or sending money.",
      },
      {
        title: "Online & Device Safety",
        desc: "Protecting passwords, using secure websites, and identifying fake links or pop-ups.",
      },
      {
        title: "What to Do if You’re Targeted",
        desc: "Steps to take if you suspect a scam or have shared information.",
      },
      {
        title: "Community Education",
        desc: "Group presentations, workshops, and personalized support sessions available.",
      },
    ],
  },
  {
    name: "Device Decluttering",
    icon: SsdIcon,
    tagline: "Make your devices faster and simpler to use.",
    details: [
      {
        title: "Storage Cleanup",
        desc: "Removing old downloads, duplicate photos, and unnecessary files to free up space.",
      },
      {
        title: "App Organization",
        desc: "Deleting unused apps and arranging the ones that matter most for easier navigation.",
      },
      {
        title: "Email & File Management",
        desc: "Cleaning up overflowing inboxes and organizing important documents and photos.",
      },
      {
        title: "Performance Optimization",
        desc: "Adjusting settings and clearing cache to improve speed and responsiveness.",
      },
      {
        title: "Personalized Setup",
        desc: "Tailoring home screens, folders, and shortcuts to each resident’s preferences.",
      },
    ],
  },
  {
    name: "Virus & Malware Removal",
    icon: BugIcon,
    tagline: "Protecting your devices from harm.",
    details: [
      {
        title: "Full System Scans",
        desc: "Identifying and removing viruses, spyware, and other malicious software.",
      },
      {
        title: "Security Updates",
        desc: "Ensuring antivirus programs and system protections are up to date.",
      },
      {
        title: "Performance Restoration",
        desc: "Fixing issues caused by malware, such as freezing, pop-ups, or slow performance.",
      },
      {
        title: "Protection Setup",
        desc: "Installing trusted security software and teaching safe browsing habits.",
      },
      {
        title: "Ongoing Monitoring",
        desc: "Providing guidance to help prevent future infections and maintain device health.",
      },
    ],
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <main className={styles.servicesPage}>
      {/* ---------- HERO ---------- */}
      <section className={styles.hero}>
        <img
          src={ServicesHero}
          alt="Technician assisting an older adult with a laptop"
          className={styles.heroImg}
        />
        <div className={styles.heroContent}>
          <h1>Our Services</h1>
          <p>
            From device repair to scam awareness, we’re here to make technology
            clear, safe, and approachable for everyone.
          </p>
          <button
            className={styles.heroBtn}
            onClick={() => navigate("/contact")}
          >
            Request Service
          </button>
        </div>
      </section>
      <section className={styles.whatWeDo}>
        <h2>What We Do</h2>
        <p className={styles.subtitle}>
          Comprehensive, patient, and practical tech support for older adults.
        </p>

        {services.map((service, i) => (
          <div
            key={service.name}
            className={styles.serviceRow}
            id={service.name.toLowerCase().replace(/ & | /g, "-")}
          >
            {/* LEFT SIDE */}
            <div className={styles.left}>
              <div className={styles.headerStack}>
                <img
                  src={service.icon}
                  alt={`${service.name} icon`}
                  className={styles.icon}
                />
                <h3>{service.name}</h3>
                <p className={styles.tagline}>{service.tagline}</p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className={styles.right}>
              <ul className={styles.detailsList}>
                {service.details.map((d) => (
                  <li key={d.title}>
                    <strong>{d.title}:</strong> {d.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
