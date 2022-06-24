import React, { useEffect, useState } from 'react'

//Components
import SingleUser from './SingleUser';
const UserList = () => {

    const [users,setUsers]= useState([]);

    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=5")
        .then(res => res.json())
        .then(res => setUsers(res.results))
    },[])

  return (
    <div>
      <ul style={{listStyle :" none"}}>
        {users.map((user,idx)=> (
            <li key={idx.toString()}><SingleUser
                user={user}
                key={idx}
            />
            </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
