import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>
        website created by{" "}
        <a href="http://www.fredrikthelin.se" target="_blank" rel="noreferrer">
          Fredrik Thelin
        </a>
      </p>
    </div>
  );
};

export default Footer;
