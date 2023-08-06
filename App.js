import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './ExpenseItem';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expenseData];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <ExpenseForm onAddExpense={addExpenseHandler} />
        <div>
          {expenses.map((expense) => (
            <ExpenseItem
              key={Math.random()} // Replace with a unique ID generator
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
