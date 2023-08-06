import React from 'react';

function ExpenseItem(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>Amount: ${props.amount}</div>
      <div>Date: {props.date.toISOString()}</div>
    </div>
  );
}

export default ExpenseItem;
