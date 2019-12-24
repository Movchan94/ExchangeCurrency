import React from 'react';
import styles from './App.module.css';
import Header from "./Header/Header";
import Article from "./Article/Article";
import Footer from "./Footer/Footer";
import {BrowserRouter} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div className={styles.app}>
                <Header/>
                <Article/>
                <Footer/>
            </div>
            </BrowserRouter>
        )
    }
}

export default App;
