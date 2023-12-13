const ExpenseList = ({ expenses, onDelete }) => {
  if (expenses.length === 0) return null;
  return (
    <div>
      <table className="w-full text-sm text-left border border-collapse border-gray-300">
        <thead className="text-xs bg-gray-50">
          <tr>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="odd:bg-white odd:bg-gray-900 even:bg-gray-50 even:bg-gray-800 border-b">
              <th className="px-4 py-2">{expense.description}</th>
              <td className="px-4 py-2">{expense.amount}</td>
              <td className="px-4 py-2">{expense.category}</td>
              <td className="px-4 py-2">
                <button
                  className="m-2 p-2 border border-red-600 rounded-lg"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">{expenses.reduce((acc, expense) => parseInt(expense.amount) + acc, 0)}</th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;