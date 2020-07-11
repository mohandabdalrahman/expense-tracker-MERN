import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/globalState';
import TransactionItem from './TransactionItem';
const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
