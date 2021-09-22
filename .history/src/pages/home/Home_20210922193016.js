import React from 'react'
import Chart from '../../components/chart/Chart'
import FeatureInfo from '../../components/featuredInfo/FeatureInfo'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <FeatureInfo />
      <Chart />
    </div>
  )
}

export default Home
