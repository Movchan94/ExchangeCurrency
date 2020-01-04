import styles from './Navbar.module.css';
import React from "react";
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <NavLink className={styles.Navlink} to="/main">Главная</NavLink>
            <NavLink className={styles.Navlink} to="/puncts_exchange">Пункты обмена</NavLink>
        </div>
    )
}
export default Navbar