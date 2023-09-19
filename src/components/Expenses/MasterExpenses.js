import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./MasterExpenses.css";

function MasterExpenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default MasterExpenses;
