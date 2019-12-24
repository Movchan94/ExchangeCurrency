import styles from './Header.module.css'
import React from "react";
import Navbar from "../Navbar/Navbar";


const Header = () => {

    return (
        <div className={styles.Header}><Navbar/></div>
    )
}

export default Header