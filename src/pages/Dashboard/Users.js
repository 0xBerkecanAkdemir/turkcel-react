import React,{useState, useEffect} from 'react'
import axios from "axios"
import Contact from './Contact'
import {Link} from "react-router-dom"
function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data))
  },[])
  return (
    <div>
      Users
    <ul>
        {
          users.map((user) => (<li key={user.id}>
          <Link to={`${user.id}`} state={user}>{user.name}</Link>
          </li>))
        }
    </ul>
    </div>
   
  )
}

export default Users