import ExpenseCard from './ExpenseCard'

function ExpenseList({ expenses, deleteExpense }) {

  return (
    <div className="mb-6">

      <h2 className="text-2xl font-semibold mb-4">
        Expense List
      </h2>

      {expenses.length === 0 ? (
        <p className="text-gray-500">
          No expenses added yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {expenses.map((expense) => (
            <ExpenseCard
              key={expense.id}
              expense={expense}
              deleteExpense={deleteExpense}
            />
          ))}

        </div>
      )}
    </div>
  )
}

export default ExpenseList