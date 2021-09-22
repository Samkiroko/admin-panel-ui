import React from 'react'
import Chart from '../../components/chart/Chart'
import FeatureInfo from '../../components/featuredInfo/FeatureInfo'
import './home.css'
import { userData } from '../../dummyData'

const Home = () => {
  return (
    <div className='home'>
      <FeatureInfo />
      <Chart data={userData} title='User Analytics' grid dataKey='Active User' />
      <div className='homeWidgets'></div>
    </div>
  )
}

export default Home
