import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    console.log(event.target.value);
    setDate(event.target.value);
  }

  function inputChangeHandler(identifier, value) {
    if (identifier === "title") {
      setTitle(value);
    } else if (identifier === "amount") {
      setAmount(value);
    } else {
      setDate(value);
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    const submittedData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onProcessData(submittedData);
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) => {
              inputChangeHandler("title", event.target.value);
            }}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
