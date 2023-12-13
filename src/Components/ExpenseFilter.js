import { categories } from "../App";

const ExpenseFilter = ({ onSelectCategory, onSelectAmount }) => {
  return (
    <div>
      <label htmlFor="Category" className="block mb-2 text-sm font-medium text-gray-900">
        Select a Category
      </label>
      <select
        onChange={(e) => onSelectCategory(e.target.value)}
        className="border rounded-lg p-2.5"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <label htmlFor="Amount" className="block mb-2 text-sm font-medium text-gray-900">
        Select an Amount
      </label>
      <select onChange={(e) => onSelectAmount(e.target.value)} className="border rounded-lg p-2.5">
        <option value=""></option>
        <option value="500">more than 500</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
