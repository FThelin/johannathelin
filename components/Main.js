import React from "react";
import styles from "../styles/Main.module.css";
import { motion } from "framer-motion";
import Button from "../components/Button";

function Main() {
  return (
    <div className={styles.container} id="home">
      <div className={styles.innerContainer}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className={styles.h1}
        >
          Johanna
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className={styles.subtext}
        >
          Sångpedagog och röstcoach baserad i Vadstena
        </motion.p>
        <Button text="kontakta mig" />
      </div>
    </div>
  );
}

export default Main;
