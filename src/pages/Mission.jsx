import styles from "./Mission.module.css";
import AboutUsImg from "../assets/AboutUsImg.png";
import MissionImg from "../assets/MissionImg.png";
import JordanDooms from "../assets/JordanDooms.jpg";

export default function Mission() {
  return (
    <main className={styles.missionPage}>
      {/* ---------- ABOUT ---------- */}
      <section className={styles.aboutSection}>
        <h1>About Third Age Technology</h1>

        <div className={styles.aboutWrapper}>
          <div className={styles.founderPhotoWrapper}>
            <img
              src={JordanDooms}
              alt="Jordan Dooms, Founder of Third Age Technology"
              className={styles.founderImg}
            />
          </div>

          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                My name is <strong>Jordan Dooms</strong>, and I’m the founder of{" "}
                <strong>Third Age Technology</strong>.
              </p>

              <p>
                I hold certifications in Information Systems, including{" "}
                <strong>CompTIA A+</strong> and{" "}
                <strong>CompTIA Security+</strong>, and over the past six years,
                I’ve worked in a range of IT support roles — from Help Desk
                Analyst to Systems Engineer.
              </p>

              <p>
                Throughout my career, I noticed a troubling pattern: many IT
                professionals lacked the patience or communication style needed
                to work effectively with older adults. Too often, seniors were
                treated as an inconvenience rather than individuals simply
                trying to stay connected in an increasingly digital world. That
                never sat right with me.
              </p>

              <p>
                The idea for Third Age Technology was sparked one afternoon when
                a close family friend reached out, concerned that they couldn’t
                get in touch with their elderly parents. I stopped by their home
                to check in, only to find that their phones were turned off.
                After powering them back on and adjusting the volume, they were
                back in touch and at ease.
              </p>

              <p>
                It was a small fix, but it made a big impact. That moment stayed
                with me. It reminded me how isolating tech problems can be for
                older adults, and how meaningful it is when someone takes the
                time to help.
              </p>

              <p>
                Third Age Technology was born out of that realization: a desire
                to bridge the gap between aging populations and the digital
                world — with patience, respect, and human-centered support.
              </p>
            </div>

            <div className={styles.aboutImageWrapper}>
              <img
                src={AboutUsImg}
                alt="Helping an elderly person with technology"
                className={styles.aboutImage}
              />
            </div>
          </div>
          
        </div>
         <img
                src={AboutUsImg}
                alt="Helping an elderly person with technology"
                className={styles.aboutImageMobile}
              />
      </section>

      {/* ---------- MISSION ---------- */}
      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <div className={styles.text}>
            <h2>Our Mission</h2>
            <p>
              To empower nursing home residents through compassionate,
              patience-centered IT support that enhances their connection,
              independence, and quality of life.
            </p>

            <p>
              We aim to build a future where every senior in every care
              community across the nation has seamless access to technology,
              supported by a trusted partner who values dignity, community, and
              human connection.
            </p>
          </div>

          <img
            src={MissionImg}
            alt="Helping an older adult use a computer"
            className={styles.image}
          />
        </div>
      </section>
    </main>
  );
}
