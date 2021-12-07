import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFlter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const addYearHandler = (rok) => {
    setFilteredYear(rok);
  };

  // const equalYear = (rok) => {
  //   return rok;
  // };

  const filteredEXpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onAddYear={addYearHandler} />
      {filteredEXpenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        filteredEXpenses.map((expense) => (
          <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))
      )}
    </Card>
  );
};

export default Expenses;
