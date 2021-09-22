import React from 'react'
import './widgetLg.css'
import avatar from '../../images/sam_pic.jpeg'

const WidgetLg = () => {
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest transactions</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <img src={avatar} alt='' />
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
