import styles from "../styles/Button.module.css";
import { motion } from "framer-motion";

const Button = ({ text }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className={styles.btn}
    >
      {text}
    </motion.button>
  );
};

export default Button;
