import { ArrowDownward } from '@material-ui/icons'
import React from 'react'
import './featureInfo.css'

const FeatureInfo = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,415</span>
          <span className='featuredMoneyRate'>
            -11.4
            <ArrowDownward />
          </span>
        </div>
      </div>
    </div>
  )
}

export default FeatureInfo
