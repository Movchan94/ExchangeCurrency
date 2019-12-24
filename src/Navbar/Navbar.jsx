import styles from './Navbar.module.css';
import React from "react";
import {NavLink} from "react-router-dom";


const Navbar = () => {

    return (
        <div className={styles.Navbar}>
            <NavLink className={styles.Navlink} to="/main">Главная</NavLink>
            <NavLink className={styles.Navlink} to="/exchange_point">Пункты обмена</NavLink>
            <NavLink className={styles.Navlink} to="/contacts">Контакты</NavLink>
        </div>
    )
}

export default Navbar