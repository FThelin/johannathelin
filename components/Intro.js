import styles from "../styles/Intro.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const Intro = () => {
  return (
    <div className={styles.container} id="services">
      <motion.h1
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        className={styles.heading}
      >
        HUR KAN JAG HJÄLPA DIG?
      </motion.h1>
      <motion.div
        initial={{ scale: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        whileInView={{ scale: 1 }}
        className={styles.imageContainer}
      >
        <Image src={"/nymusik.jpg"} alt="photo of johanna" layout="fill" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        className={styles.p}
      >
        Under maj och juni månad öppnar jag upp för en ”prova på”-period i
        Vadstena! Ni för chans att lära känna mig, en ny sångpedagog i stan, och
        jag får chans att lära känna er alla sångsugna!
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        className={styles.p}
      >
        Hos mig kommer vi sjunga tillsammans, du kommer få prova på hur det kan
        vara att utforska och utveckla din sång och dina olika klanger. Du
        kommer också få ett par första tips på hur du med små medel och verktyg
        kan lära dig behärska ditt alldeles egna unika instrument, din röst, på
        bästa sätt.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        className={styles.p}
      >
        Man kan boka enstaka sånglektioner men också köpa sång-paket för att
        riktigt hinna med och få känna på hur det faktiskt är att gå hos en
        sångpedagog, detta till ett lite mer förmånligt pris.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        className={styles.welcome}
      >
        Välkommen till mig!
      </motion.p>
    </div>
  );
};

export default Intro;
