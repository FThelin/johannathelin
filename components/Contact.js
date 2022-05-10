import styles from "../styles/Contact.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contact2", {
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
        setIsLoading(false);
        setIsSuccess(true);
      } else {
        setIsLoading(false);
        setSubmitted(true);
        setIsSuccess(false);
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
        <div className={styles.inputGroup}>
          <label htmlFor="name">Namn</label>
          <input
            type="text"
            name="name"
            value={name}
            className={styles.inputField}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            className={styles.inputField}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message">Meddelande</label>
          <textarea
            type="text"
            rows="4"
            cols="20"
            value={message}
            name="message"
            className={styles.inputFieldTextArea}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        {submitted && isSuccess && (
          <p style={{ marginTop: "1rem", color: "white" }}>Mail skickat</p>
        )}
        {submitted && !isSuccess && (
          <div
            style={{ backgroundColor: "pink", width: 300, padding: "0.5rem" }}
          >
            <p style={{ color: "red", fontSize: 14 }}>
              Något gick fel. Testa igen eller maila manuellt till
              johannavocalcoach@gmail.com
            </p>
          </div>
        )}
        <button
          style={{ opacity: isLoading ? 0.5 : 1 }}
          disabled={isLoading}
          type="submit"
          className={styles.btn}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          {isLoading ? "Skickar.." : "Skicka"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
