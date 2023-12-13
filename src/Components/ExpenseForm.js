import { useForm } from "react-hook-form";
import { categories } from "../App";

const ExpenseForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
            Description
          </label>
          <input {...register('description')} id="description" className="border p-2.5 w-full" placeholder="Description" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">
            Amount
          </label>
          <input {...register('amount')} type="number" id="amount" className="border p-2.5 w-full" placeholder="Amount" />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">
            Category
          </label>
          <select {...register('category')} id="category" className="border p-2.5 w-full">
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button className="m-2 p-2 border border-blue-600 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;