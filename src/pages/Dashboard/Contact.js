import React,{useState,useEffect} from 'react'
import axios from "axios"
function Contact() {
  const [contacts, setContacts] =useState([])

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then((res) => setContacts(res.data))
  },[])
  return ( 
    <div>
      Contact
    <ul>
    {
      contacts.map((contact) => (<li key={contact.phone}>{contact.phone}</li>))
    }
    </ul>
    </div>
  )
}

export default Contact