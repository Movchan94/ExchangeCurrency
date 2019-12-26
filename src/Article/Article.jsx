import styles from './Article.module.css'
import React from "react";
import Converter from "./Converter";


class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rate: {
                USD: {},
                EUR: {},
                RUR: {}

            }
        }
        this.getRate()
    }

    getRate = () => {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(data => {
                return data.json()
            })
            .then(data => {
                this.setState(
                    {
                        rate: {
                            USD: data[0],
                            EUR: data[1],
                            RUR: data[2],
                        }
                    })
                console.log(data);
            })
    }

    render() {

        return (
            <div className={styles.Article}>
                <span
                    className={styles.item1}> Курс валют на ../../....г.  </span>

                <span className={styles.item2}>Курс к гривне </span>
                <span className={styles.item3}>Продажа </span>
                <span className={styles.item4}>Покупка </span>
                <span
                    className={styles.item5}>{this.state.rate.USD.ccy}</span>
                <span
                    className={styles.item6}>{this.state.rate.USD.sale}</span>
                <span
                    className={styles.item7}>{this.state.rate.USD.buy}</span>
                <span
                    className={styles.item8}>{this.state.rate.EUR.ccy} </span>
                <span
                    className={styles.item9}>{this.state.rate.EUR.sale} </span>
                <span
                    className={styles.item10}>{this.state.rate.EUR.buy} </span>
                <span
                    className={styles.item11}>{this.state.rate.RUR.ccy} </span>
                <span
                    className={styles.item12}>{this.state.rate.RUR.sale} </span>
                <span
                    className={styles.item13}>{this.state.rate.RUR.buy} </span>

                <Converter rate={this.state.rate}/>
            </div>

        )
    }
}

export default Article