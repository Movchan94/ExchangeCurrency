import styles from './Converter.module.css'
import React from "react";


class Converter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

    }


    render() {

        return (
            <div className={styles.Converter}>
                Конвертер валют
                <select>
                    <option value={this.props.rate.USD.buy}>USD</option>
                    <option value={this.props.rate.EUR.buy}>EUR</option>
                    <option value={this.props.rate.RUR.buy}>RUR</option>
                </select>
            </div>

        )
    }
}

export default Converter