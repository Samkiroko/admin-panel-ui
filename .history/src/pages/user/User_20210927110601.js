import React from 'react'
import './user.css'
import avatar from '../../images/avatar2.jpg'
const User = () => {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <button className='userAddButton'>Create</button>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img src={avatar} alt='avatar' className='userShowImg' />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Joy Shiku</span>
              <span className='userShowUserTitle'>Software Engineer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account details</span>
          </div>
        </div>
        <div className='userUpdate'></div>
      </div>
    </div>
  )
}

export default User
