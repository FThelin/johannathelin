import styles from "../styles/Contact.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <div className={styles.container} id="contact">
      <motion.h1
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        className={styles.heading}
      >
        KONTAKT
      </motion.h1>
      <form className={styles.main}>
        <formGroup className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className={styles.inputField}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </formGroup>
        <formGroup className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className={styles.inputField}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </formGroup>
        <formGroup className={styles.inputGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            rows="4"
            cols="20"
            name="message"
            className={styles.inputFieldTextArea}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </formGroup>
        <input
          type="submit"
          className={styles.btn}
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </form>
    </div>
  );
};

export default Contact;
