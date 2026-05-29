import { useState, useRef, useEffect } from 'react'

function ExpenseForm({ addExpense }) {

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')

  const titleRef = useRef()

  // Focus Input
  useEffect(() => {
    titleRef.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !amount || !category) {
      alert('Please fill all fields')
      return
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount,
      category,
      date: new Date().toLocaleDateString(),
    }

    addExpense(newExpense)

    setTitle('')
    setAmount('')
    setCategory('')
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 mb-6">

      <h2 className="text-2xl font-semibold mb-4">
        Add Expense
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >

        <input
          ref={titleRef}
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-700"
        >
          Add Expense
        </button>

      </form>
    </div>
  )
}

export default ExpenseForm