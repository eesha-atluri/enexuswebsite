import React from "react";
import styles from "./Services.module.css"


export const Services = () => {
    return (
    <section className={styles.container} id="services">
      <div className={styles.content}>
        <p className={styles.description}>By working closely with partners, E-Nexus Inc delivers world-class professional services, which offer a multitude of domain expertise, and proficiencies in various software development methods, to complement ENI's technology and solutions.
</p>

<section className={styles.centeredSection}>
  <h3>E-NEXUS Inc can offer a wide range of options to suit a customer's needs, including:</h3>
  <ul className={styles.centeredList}>
    <li>Turn-Key Solutions</li>
    <li>Customization of Prepackaged Solutions</li>
    <li>Co-development and Mentoring</li>
    <li>Training</li>
    <li>Support</li>
  </ul>
</section>



        </div>  
    </section>
    );
}
