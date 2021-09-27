import React from 'react'
import './newUser.css'

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New user</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input type='text' placeholder='joyshiku93' />
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
          <label>Password</label>
          <input type='password' placeholder='*********' />
        </div>{' '}
        <div className='newUserItem'>
          <label>Phone:</label>
          <input type='Number' placeholder='+254 7xx xxx xxx' />
        </div>{' '}
        <div className='newUserItem'>
          <label>Address</label>
          <input type='text' placeholder='thindigua | Kiambu' />
        </div>
      </form>
    </div>
  )
}

export default NewUser
