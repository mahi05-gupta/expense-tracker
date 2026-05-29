import { useEffect, useState } from 'react'

function ApiData() {

  const [users, setUsers] = useState([])

  // Fetch API Data
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.slice(0, 5)))
      .catch((error) => console.log(error))

  }, [])

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 mt-6">

      <h2 className="text-2xl font-semibold mb-4">
        API Fetched Users
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg p-4"
          >

            <h3 className="font-bold">
              {user.name}
            </h3>

            <p>{user.email}</p>

          </div>
        ))}

      </div>
    </div>
  )
}

export default ApiData