import { useState, useMemo, useCallback, useEffect } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ApiData from './components/ApiData'

function App() {

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses')

    if (savedExpenses) {
      return JSON.parse(savedExpenses)
    }

    return []
  })

  useEffect(() => {
    localStorage.setItem(
      'expenses',
      JSON.stringify(expenses)
    )
  }, [expenses])

  const addExpense = useCallback((expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      expense,
    ])
  }, [])

  const deleteExpense = useCallback((id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter(
        (expense) => expense.id !== id
      )
    )
  }, [])

  const totalExpense = useMemo(() => {
    return expenses.reduce(
      (total, expense) =>
        total + Number(expense.amount),
      0
    )
  }, [expenses])

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-5">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-8">

          <h1 className="text-5xl font-extrabold text-blue-700 mb-3">
            Expense Tracker
          </h1>

          <p className="text-gray-600 text-lg">
            Manage your daily expenses easily
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">

          <h2 className="text-3xl font-bold text-gray-800">
            Total Expense:
            <span className="text-green-600 ml-2">
              ₹{totalExpense}
            </span>
          </h2>

        </div>

        <ExpenseForm addExpense={addExpense} />

        <ExpenseList
          expenses={expenses}
          deleteExpense={deleteExpense}
        />

        <ApiData />

      </div>

    </div>
  )
}

export default App