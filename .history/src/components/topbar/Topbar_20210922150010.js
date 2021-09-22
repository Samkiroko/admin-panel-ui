import React from 'react'
import './topbar.css'
import { Language, NotificationsNone, Settings } from '@material-ui/icons'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Admin-Panel</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
