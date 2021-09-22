import React from 'react'
import './widgetLg.css'
import avatar from '../../images/sam_pic.jpeg'

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton' + type}>{type}</button>
  }
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
          <td className='widgetLgUser'>
            {' '}
            <img src={avatar} alt='avatar' className=' widgetLgImg' />
            <span className='widgetLgName'>Sam kiroko</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>2 Jun 2021</td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
