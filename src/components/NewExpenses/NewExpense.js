import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function processDataHandler(data) {
    const newData = {
      ...data,
      ID: Math.random().toString(),
    };

    props.onFetchingData(newData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onProcessData={processDataHandler} />
    </div>
  );
}

export default NewExpense;
