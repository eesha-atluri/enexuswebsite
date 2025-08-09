import React, {useState} from "react";
import styles from "./Navbar.module.css";
import logoImage from "./icon.png";
import menuIcon from "./menuIcon.png";
import closeIcon from "./close.png"; 


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
        <a className={styles.title} href=" /">
        <img src={logoImage} alt="Logo" className={styles.logo} />
        </a>
        <div className={styles.menu}>
        <img
    className={`${styles.menuBtn} ${menuOpen ? styles.closeIcon : ""}`}
    src={menuOpen ? closeIcon : menuIcon}
    alt="menu-button"
    onClick={() => setMenuOpen(!menuOpen)}
/>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#consulting">Consulting</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#clients">Clients</a>
                </li>
                <li>
                    <a href="#careers">Careers</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};

