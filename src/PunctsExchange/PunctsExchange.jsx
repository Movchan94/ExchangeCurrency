import styles from './PunctsExchange.module.css'
import React from "react";
import Navbar from "../Navbar/Navbar";


const PunctsExchange = () => {


    return (
        <div className={styles.PunctsExchange}>
            <iframe
                className={styles.Map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6338.319745707608!2d35.0481960180584!3d48.461078476797184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcd00b2fd78aff4cb!2z0J7RgtC00LXQu9C10L3QuNC1INCf0YDQuNCy0LDRgtCR0LDQvdC60LA!5e0!3m2!1sru!2sua!4v1578135931450!5m2!1sru!2sua"
                frameBorder="0"  allowFullScreen=""></iframe>
        </div>
    )
}

export default PunctsExchange