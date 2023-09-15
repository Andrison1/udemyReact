import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import userEvent from "@testing-library/user-event";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [year, setYear] = useState("2021");

  function clickHandler() {
    setTitle("Updated");
    console.log(props.title);
  }

  function yearHandler(data) {
    setYear(data);
  }
  console.log(year);
  return (
    <>
      <div>
        <ExpensesFilter
          selected={year}
          onChangeYear={yearHandler}
        ></ExpensesFilter>
      </div>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </>
  );
}

export default ExpenseItem;
