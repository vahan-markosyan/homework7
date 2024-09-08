import { useState } from 'react'
import './App.css'
import { UserContext } from './context'
import { Dashboard } from './dashboard'

export default function App() {

  const[users, setUsers] = useState([
    {id:101, name:"Smbo", surname:"Karapetyan", age:18, login:"smbo2006@gmail.com"},
    {id:102, name:"Haso", surname:"Muradyan", age:22, login:"muradyan2002@gmail.com"},
    {id:103, name:"Mxo", surname:"Mkrtchyan", age:24, login:"mxo2000@gmail.com"}
  ])

  const handleDelete = id => {
    setUsers(users.filter(user => user.id != id))
  }

  const handleAdd = user => {
    setUsers([...users, {...user, id: Date.now()}])
  
  }



  return <div>
  <UserContext.Provider value = {{users, onAdd:handleAdd, onRemove:handleDelete}}>

  <Dashboard />

  </UserContext.Provider >
  </div>
}
