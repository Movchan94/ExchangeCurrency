import styles from './Article.module.css'
import React from "react";


class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            USD: {},
            1: {},
            2: {}
        }
        this.getRate()
    }

    getRate = () => {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(data => {
                return data.json()
            })
            .then(data => {
                this.setState({
                    base_ccyUAH: data[0].base_ccy,
                    ccyUSD: data[0].ccy,
                    buyUSD: data[0].buy,
                    saleUSD: data[0].sale,

                    base_ccyUAH: data[1].base_ccy,
                    ccyEUR: data[1].ccy,
                    buyEUR: data[1].buy,
                    saleEUR: data[1].sale,

                    base_ccyUAH: data[2].base_ccy,
                    ccyRUR: data[2].ccy,
                    buyRUR: data[2].buy,
                    saleRUR: data[2].sale,

                })
                console.log(data);
            })
    }


    render() {

        return (
            <div className={styles.Article}>
                <span
                    className={styles.item1}> Курс валют на {this.state.base_ccyUAH} {this.state.ccyEUR}  </span>
                <span className={styles.item2}>USD </span>
                <span className={styles.item3}>USD </span>
                <span className={styles.item4}>USD </span>
                <span className={styles.item5}>Калькулятор обмена </span>
                <span
                    className={styles.item6}>Я хочу: Купить/продать, Результат </span>
            </div>

        )
    }
}

export default Article