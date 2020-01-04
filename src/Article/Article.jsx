import styles from './Article.module.css'
import React from "react";


class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ccy: ['USD', 'EUR', 'RUR'],
            USD: {},
            EUR: {},
            RUR: {},
            base_ccy: 'UAH',
            amount: '',
            convertTo: 'USD',
            result: '',
            date: '',
            myValue: ''
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
                        USD: data[0],
                        EUR: data[1],
                        RUR: data[2],
                    })
            })
    }
    handleSelect = e => {
        this.setState(
            {
                [e.target.name]: e.target.value,
                result: null
            }
        );
    };
    handleInput = e => {
        this.setState(
            {
                amount: e.target.value,
                result: null,
            }
        );
    };
    calculate = () => {

        const amount = this.state.amount;
        if (amount === isNaN) {
            return
        } else {
            let result = (amount * this.state[this.state.convertTo][this.state.myValue]).toFixed(4);
            this.setState({
                result
            })
        }
    }
    onChangeHandler = (e) => {
        this.setState({myValue: e.target.value})
    }

    render() {
        return (
            <div className={styles.Article}>
                <span className={styles.item1}> Курс валют на {(new Date().toLocaleDateString())}</span>
                <span className={styles.item2}>Курс к гривне </span>
                <span className={styles.item3}>Продажа </span>
                <span className={styles.item4}>Покупка </span>
                <span className={styles.item5}>{this.state.USD.ccy}</span>
                <span className={styles.item6}>{this.state.USD.sale}</span>
                <span className={styles.item7}>{this.state.USD.buy}</span>
                <span className={styles.item8}>{this.state.EUR.ccy} </span>
                <span className={styles.item9}>{this.state.EUR.sale} </span>
                <span className={styles.item10}>{this.state.EUR.buy} </span>
                <span className={styles.item11}>{this.state.RUR.ccy} </span>
                <span className={styles.item12}>{this.state.RUR.sale} </span>
                <span className={styles.item13}>{this.state.RUR.buy} </span>
                <div className={styles.item15}>Калькулятор валют</div>
                <div className={styles.item14}>Я хочу:
                    <input
                    onChange={this.onChangeHandler}
                    type="radio"
                    name="buy/sale"
                    value='sale'/>
                    <span>Купить</span>

                    <input
                        onChange={this.onChangeHandler}
                        type="radio"
                        name="buy/sale"
                        value='buy'/><span>Продать</span>
                </div>
                <div className={styles.item16}>
                    <form>

                        <select
                            name='convertTo'
                            value={this.state.convertTo}
                            onChange={this.handleSelect}
                            className={styles.currencyType}>
                            {this.state.ccy.map(currency => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </form>
                </div>
                    <div className={styles.item17}>
                        <button className={styles.buttonSum}
                            onClick={this.calculate}
                        >Расчитать
                        </button>
                    </div>
                <div className={styles.item16}>
                    <form>
                        <select
                            name='base'
                            value={this.state.base_ccy}
                            onChange={this.handleSelect}
                            className={styles.currencyType}>
                            <option>
                                UAH
                            </option>
                        </select>
                    </form>
                </div>
                <div className={styles.item18}><input
                    value={this.state.amount}
                    onChange={this.handleInput}
                    className={styles.sumAdd} type="number"
                    placeholder={'Введите сумму...'}
                />
                </div>
                <div className={styles.item18}><input
                    value={this.state.result} disabled={true}
                    className={styles.sumAdd}
                    placeholder={'Стоимость в грн.'}
                />
                </div>
            </div>
        )
    }
}

export default Article