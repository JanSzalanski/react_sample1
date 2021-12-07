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
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onAddYear={addYearHandler} />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        // year={year}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        // year={year}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        // year={year}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        // year={year}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
