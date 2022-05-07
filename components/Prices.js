import styles from "../styles/Prices.module.css";
import Button from "../components/Button";
import PriceCategories from "../data/priceCategories.json";

const Prices = () => {
  return (
    <div className={styles.container} id="prices">
      <h2 className={styles.header}>priser</h2>
      {PriceCategories.map((c) => (
        <div className={styles.categoryRow} key={c.amount}>
          <div className={styles.rowLeft}>
            <div className={styles.amountInfo}>
              <h6>{c.amount}</h6>
              <p>{c.amount > 1 ? "lektioner" : "lektion"}</p>
            </div>
            <div className={styles.lessonInfo}>
              <h6>{c.title}</h6>
              <p>{c.description}</p>
            </div>
          </div>
          <hr className={styles.divider}></hr>
          <div className={styles.rowRight}>
            <div className={styles.priceInfo}>
              <h6>{c.price}</h6>
              <p>kronor</p>
            </div>
            <div className={styles.buttonContainer}>
              <a href={"#contact"}>
                <Button text="Välj" />
              </a>
            </div>
          </div>
        </div>
      ))}
      <p className={styles.bottomText}>
        Varje lektion är 45 minuter och vi håller till på Södra Rännevallen 14 i
        Vadstena
      </p>
    </div>
  );
};

export default Prices;
