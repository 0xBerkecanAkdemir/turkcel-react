import React,{useState,useEffect} from 'react'
import axios from "axios"
import {Link, useLocation, useParams} from "react-router-dom"
function UserDetails() {
const {id} = useParams();
const location = useLocation();
const [user, setUser] = useState(location.state);

  useEffect(() => {
    if(!user?.id){
      axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
    }
  },[id, user])
  return (
    <div>
    <h2>UserDetails</h2>
    {
      user && <pre>
      {JSON.stringify(user, null, 2)}
      </pre>
    }
    </div>
  )
}

export default UserDetails