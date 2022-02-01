import transactions from "../../../data/transactions.json";
import TransactionsItem from "../transactionsItem/TransactionsItem";

import s from "./TransactionsList.module.css";

const TransactionsList = () => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {transactions.map(({ id, ...items }) => {
        return <TransactionsItem key={id} {...items} />;
      })}
    </table>
  );
};

export default TransactionsList;
