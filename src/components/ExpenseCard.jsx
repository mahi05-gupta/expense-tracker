import { FaTrash } from 'react-icons/fa'

function ExpenseCard({ expense, deleteExpense }) {

  return (
    <div className="bg-white rounded-3xl shadow-lg p-5 hover:scale-105 transition duration-300 border border-gray-200">

      <div className="flex justify-between items-center mb-3">

        <h3 className="text-2xl font-bold text-blue-700">
          {expense.title}
        </h3>

        <button
          onClick={() => deleteExpense(expense.id)}
          className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600"
        >
          <FaTrash />
        </button>

      </div>

      <p className="text-lg mb-2">
        💰 Amount:
        <span className="font-semibold ml-2">
          ₹{expense.amount}
        </span>
      </p>

      <p className="text-lg mb-2">
        📂 Category:
        <span className="font-semibold ml-2">
          {expense.category}
        </span>
      </p>

      <p className="text-gray-500">
        📅 {expense.date}
      </p>

    </div>
  )
}

export default ExpenseCard