import { LineStyle } from '@material-ui/icons'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <LineStyle />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
