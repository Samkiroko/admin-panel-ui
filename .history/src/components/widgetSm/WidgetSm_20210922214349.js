import React from 'react'
import './widgetSm.css'
import avatar from '../../images/avatar2.jpg'

const WidgetSm = () => {
  return (
    <div className='widgetSg'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img src={avatar} alt='avatar' />
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm
