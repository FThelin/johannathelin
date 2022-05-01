import styles from "../styles/Prices.module.css";
import Button from "../components/Button";

const Prices = () => {
  return (
    <div className={styles.container} id="prices">
      <h2 className={styles.header}>priser</h2>
      <div className={styles.sectionContainer}>
        <div className={styles.section}>
          <div className={styles.sectionFirstContent}>
            <div className={styles.lessons}>
              <h6>1</h6>
              <p>lektion</p>
            </div>
            <div className={styles.lessonInfo}>
              <h6>Prova på</h6>
              <p>
                Kom och prova på hur det är att ha en sånglektion och gå
                härifrån med tips om din fortsatta utveckling
              </p>
            </div>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.priceInfo}>
              <h6>600</h6>
              <p>kronor</p>
            </div>
            <p className={styles.cityName}>VADSTENA</p>
            <div className={styles.priceButton}>
              <a href={"#contact"}>
                <Button text="Välj" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.section}>
          <div className={styles.sectionFirstContent}>
            <div className={styles.lessons}>
              <h6>3</h6>
              <p>lektioner</p>
            </div>
            <div className={styles.lessonInfo}>
              <h6>Prova på</h6>
              <p>
                Kom och prova på hur det är att ha en sånglektion och gå
                härifrån med tips om din fortsatta utveckling
              </p>
            </div>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.priceInfo}>
              <h6>1650</h6>
              <p>kronor</p>
            </div>
            <p className={styles.cityName}>VADSTENA</p>
            <div className={styles.priceButton}>
              <a href={"#contact"}>
                <Button text="Välj" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.section}>
          <div className={styles.sectionFirstContent}>
            <div className={styles.lessons}>
              <h6>5</h6>
              <p>lektioner</p>
            </div>
            <div className={styles.lessonInfo}>
              <h6>Prova på</h6>
              <p>
                Kom och prova på hur det är att ha en sånglektion och gå
                härifrån med tips om din fortsatta utveckling
              </p>
            </div>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.priceInfo}>
              <h6>2500</h6>
              <p>kronor</p>
            </div>
            <p className={styles.cityName}>VADSTENA</p>
            <div className={styles.priceButton}>
              <a href={"#contact"}>
                <Button text="Välj" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
