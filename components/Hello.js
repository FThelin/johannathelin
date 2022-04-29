import styles from "../styles/Hello.module.css";

const Hello = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.hello}>hello. ✋</p>
        <hr />
        <p className={styles.text}>Låt oss börja med att säga hej!</p>
      </div>
    </div>
  );
};

export default Hello;
