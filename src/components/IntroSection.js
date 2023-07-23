// components/IntroSection.js
import Link from "next/link";
import styles from "../styles/Home.module.css"; //
const IntroSection = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.introContent}>
        <h1 className={styles.introTitle}>Welcome to SciFacts Central</h1>
        <p className={styles.introDescription}>
          SciFacts Central is your go-to destination for fascinating science
          facts, discoveries, and more. Explore the wonders of the universe,
          delve into the mysteries of nature, and stay updated with the latest
          breakthroughs in scientific research. Join us on this exciting journey
          of knowledge!
        </p>
      </div>
      {/* Additional content on the right side (if needed) */}
    </section>
  );
};

export default IntroSection;
