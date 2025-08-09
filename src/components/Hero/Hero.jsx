import React from "react";
import styles from "./Hero.module.css"
import busIcon from "./business.png"

export const Hero = () => {
    return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h3 className={styles.title}>Connecting People & Technology...</h3>
        <p className={styles.description}>E-NEXUS Inc, founded in 2000 and based in Novi, MI, is a leading IT consulting and project development firm. We deliver customized software, hardware support, outsourcing, and IT management solutions that integrate people, processes, and technology. Our client-focused approach ensures innovative, cost-effective results tailored to evolving business needs.
</p>
<a href="mailto:sri@enexusinc.com" className={styles.contactBtn}>Contact Us</a>
        </div>  
        <img src={busIcon} alt="Business" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    );
}

