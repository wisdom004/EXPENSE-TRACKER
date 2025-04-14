// components/ExpenseTable.jsx
import React from "react";
import "../App.css";

function ExpenseTable({ expenses }) {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount ($)</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.amount.toFixed(2)}</td>
            <td>{expense.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
