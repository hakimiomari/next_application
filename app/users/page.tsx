'use client'
import React from 'react'

interface User{
  id: number,
  name:string
}

const UsersPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users:User[] = await response.json();
  return (
    <>
    <h1>Users</h1>
    <ul>
      {users.map((user) =>{
        return(
          <div className='flex gap-3'>
          <li>{user.id}</li>
          <li>{user.name}</li>
          </div>
        )
      })}
    </ul>
    </>
  )
}

export default UsersPage