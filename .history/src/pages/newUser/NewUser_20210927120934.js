import React from 'react'
import './newUser.css'

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New user</h1>
      <form className='newUserForm'>
        <label>
          Name:
          <input type='text' />
        </label>
        <label>
          Email:
          <input type='email' />
        </label>
        <label>
          Password:
          <input type='password' />
        </label>
        <label>
          Confirm password:
          <input type='password' />
        </label>
        <button className='newUserButton'>Create</button>
      </form>
    </div>
  )
}

export default NewUser
