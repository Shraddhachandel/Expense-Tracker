import { useState } from "react";
import ExpenseFilter from "./Components/ExpenseFilter";
import ExpenseList  from "./Components/ExpenseList";
import ExpenseForm from "./Components/ExpenseForm";



export const categories = ["Groceries", "Utilities", "Snacks", "Entertainment"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [amt, setAmt] = useState(0);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;
  const visibleExpensesssss = amt
    ? expenses.filter((expense) => expense.amount >= amt)
    : visibleExpenses;

  return (
    <>
      <div className="m-5">
        <ExpenseForm onSubmit={(expense) => setExpenses([...expenses, { ...expense, id: expenses.length }])} />
      </div>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
        onSelectAmount={(amount) => setAmt(amount)}
      />
      <ExpenseList
        expenses={visibleExpensesssss}
        onDelete={(id) => setExpenses(expenses.filter((expense) => expense.id !== id))}
      />
    </>
  );
}

export default App;