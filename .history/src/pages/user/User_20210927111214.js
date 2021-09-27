import React from 'react'
import './user.css'
import avatar from '../../images/avatar2.jpg'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons'
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
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon' />
              <span className='userShowInfoTitle'>Joyshiku93</span>
            </div>
            <div className='userShowInfo'>
              <CalendarToday className='userShowIcon' />
              <span className='userShowInfoTitle'>7.12.1993</span>
            </div>{' '}
            <div className='userShowInfo'>
              <PhoneAndroid className='userShowIcon' />
              <span className='userShowInfoTitle'>+254 7333 3333</span>
            </div>{' '}
            <div className='userShowInfo'>
              <MailOutline className='userShowIcon' />
              <span className='userShowInfoTitle'>Joyshiku@gmail.com</span>
            </div>{' '}
            <div className='userShowInfo'>
              <LocationSearching className='userShowIcon' />
              <span className='userShowInfoTitle'>Thindigua | kiambu</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'></div>
      </div>
    </div>
  )
}

export default User
