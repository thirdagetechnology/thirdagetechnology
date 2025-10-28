import { useState } from "react";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ name, icon, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={styles.inner}>
        {/* FRONT */}
        <div className={styles.front}>
          <img src={icon} alt={`${name} icon`} className={styles.icon} />
          <h3 className={styles.title}>{name}</h3>
        </div>

        {/* BACK */}
        <div className={styles.back}>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
