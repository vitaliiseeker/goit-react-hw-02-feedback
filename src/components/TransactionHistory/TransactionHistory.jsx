import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>TYPE</th>
                    <th>AMOUNT</th>
                    <th>CURRENCY</th>
                </tr>
            </thead>

            <tbody>
                {items.map(e => (
                    <tr key={e.id}>
                        <td>{e.type}</td>
                        <td>{e.amount}</td>
                        <td>{e.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>)

}


TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired
}