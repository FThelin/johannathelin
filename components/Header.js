import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.header}
      style={{
        backgroundColor: scrollPosition > 200 ? "black" : "transparent",
      }}
    >
      <div className={styles.logoContainer}>
        <Image
          src={logo}
          width={35}
          height={35}
          alt="logo"
          className={styles.logo}
        />
        <p className={styles.logoText}>Johanna Thelin.</p>
      </div>
      <ul className={styles.nav}>
        <Link href={"#home"} passHref>
          <li>HEM</li>
        </Link>
        <Link href={"#services"} passHref>
          <li>TJÄNSTER</li>
        </Link>
        <Link href={"#prices"} passHref>
          <li>PRISER</li>
        </Link>
        <Link href={"#about"} passHref>
          <li>OM MIG</li>
        </Link>
        <Link href={"#contact"} passHref>
          <li>KONTAKT</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
