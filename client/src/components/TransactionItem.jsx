import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';
import { numberWithCommas } from '../utils/format';

const TransactionItem = ({ transaction: { text, amount, _id } }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <li className={amount < 0 ? 'minus' : 'plus'}>
        {text}{' '}
        <span>
          {amount < 0 ? '-' : '+'}${numberWithCommas(Math.abs(amount))}
        </span>
        <button onClick={() => deleteTransaction(_id)} className="delete-btn">
          x
        </button>
      </li>
    </>
  );
};

export default TransactionItem;
