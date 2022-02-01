import PropTypes from "prop-types";
import "./transactionsItem.css";

const TransactionsItem = ({ type, amount, currency }) => {
  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};

export default TransactionsItem;

TransactionsItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
