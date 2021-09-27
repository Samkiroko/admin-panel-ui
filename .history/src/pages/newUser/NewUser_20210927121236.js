import React from 'react'
import './newUser.css'

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New user</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input type='text' />
        </div>
        <div className='newUserItem'>
          <label>Full Name</label>
          <input type='text' placeholder='Joy Skiku' />
        </div>{' '}
        <div className='newUserItem'>
          <label>Email:</label>
          <input type='email' placeholder='joy@gmail.com' />
        </div>{' '}
        <div className='newUserItem'>
          <label>Name:</label>
          <input type='text' />
        </div>{' '}
        <div className='newUserItem'>
          <label>Name:</label>
          <input type='text' />
        </div>{' '}
        <div className='newUserItem'>
          <label>Name:</label>
          <input type='text' />
        </div>
      </form>
    </div>
  )
}

export default NewUser
