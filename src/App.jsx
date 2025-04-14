import React, { useState } from "react";
import "./App.css";
import ExpenseTable from "./Components/ExpenseTable";
                           
import ExpenseForm from "./Components/ExpenseForm";
import Search from "./Components/Search";

function App() {
  
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Groceries", amount: 40, description: "Weekly shopping" },
    { id: 2, name: "Transport", amount: 15, description: "Bus fare" },
  ]);
  const [search, setSearch] = useState("");
  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: expenses.length + 1,
      amount: parseFloat(expense.amount),
    };
    setExpenses([...expenses, newExpense]);
  };

  const filteredExpenses = expenses.filter((expense) =>
    `${expense.name} ${expense.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <Search search={search} setSearch={setSearch} />
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;
