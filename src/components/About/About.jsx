import React from "react";
import netIcon from "./networking.png"
import styles from "./About.module.css"



const About = () => {
    return (
      <section className={styles.container} id="consulting">
        <h2 className={styles.title}></h2>
        <h3>e-NEXUS Inc has consultants skilled in various fields of internet technology. The following is an abbreviated list of technologies our IT gurus specialize in: </h3>
        <div className={styles.content}>
        <img src={netIcon} alt="Networking" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem} >
            <div>
                <h3>Client/Server Technologies</h3>
                <p>Java, J2EE, .Net, C++, Coldfusion, Dreamweaver, Oracle</p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <div>
                <h3>Data Warehousing/ Business Intelligence</h3>
                <p>Datastage, Informatica, Microstrategy, Business Objects, Cognos/Reportnet, Crystal Reports, Dynamics
                </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <div>
                <h3>ERP / CRM: </h3>
                <p>Peoplesoft, JD Edwards, SAP, Siebel, Oracle   </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <div>
                <h3>Database:</h3>
                <p>SQL Server, DB2, IMS, Sybase, Teradata, Oracle</p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <div>
                <h3>Mainframe/Midrange:</h3>
                <p>Mainframe/Midrange, Quality Assurance, Web, SOX Compliance</p>
            </div>
            </li>
            </ul>
        </div>
      </section>
    );
  };
  
  export default About;
  