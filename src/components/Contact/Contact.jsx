import React from "react";
import emailIcon from "./emailIcon.png"

import styles from "./Contact.module.css";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <img src={emailIcon} alt="Logo" className={styles.logo} />
          <a href="mailto:sri@enexusinc.com">sri@enexusinc.com</a>
        </li>
       
      </ul>
    </footer>
  );
};