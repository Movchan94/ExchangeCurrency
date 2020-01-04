import React from 'react';
import styles from './App.module.css';
import Header from "./Header/Header";
import Article from "./Article/Article";
import Footer from "./Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import PunctsExchange from "./PunctsExchange/PunctsExchange";
import {Route, Switch} from "react-router";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className={styles.app}>
                    <Header/>
                    <Switch>
                        <Route path ='/puncts_exchange'
                               render = {() => <PunctsExchange/>}/>
                        <Route path ='/main'
                               render = {() => <Article/>}/>

                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
