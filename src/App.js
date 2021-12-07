// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Papier Toaletowy",
      amount: 150,
      date: new Date(2020, 3, 10),
    },
    { id: "e2", title: "Dokupienie BTC", amount: 3830, date: new Date(2021, 7, 20) },
    {
      id: "e3",
      title: "Samochód OC i AC",
      amount: 2999.95,
      date: new Date(2021, 8, 1),
    },
    {
      id: "e4",
      title: "Koszta balangi",
      amount: 1800,
      date: new Date(2021, 4, 10),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
