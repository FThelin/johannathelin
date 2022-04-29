import styles from "../styles/About.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.leftContainer}>
        <motion.h2
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileInView={{ opacity: 1 }}
          className={styles.heading}
        >
          OM MIG
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileInView={{ opacity: 1 }}
          className={styles.aboutText}
        >
          Johanna Thelin, sångpedagog och sångerska , utbildad vid Högskolan för
          Scen och Musik i Göteborg. Har sedan 2013 jobbat som sångpedagog på
          estetiska programmet musik på gymnasium i Göteborg. Väl anlitad som
          solist/sångerska vid konserter, dop, bröllop och begravningar. Har
          även jobbat som körsångerska med The Legends och deltagit vid flertal
          turnéer runt om Sverige och norden. Bor och verkar numera i Vadstena.
        </motion.p>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={"/jt2.jpg"}
            alt="photo of johanna"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
