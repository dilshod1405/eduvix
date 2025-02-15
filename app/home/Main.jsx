import React from 'react'
import Header from '../_components/header/Header'
import Banner from '../_components/banner/Banner'
import Info from '../_components/info/Info'
import Teachers from '../_components/teachers/Teachers'
import Statistics from '../_components/statistics/Statistics'
import Certificate from '../_components/certificate/Certificate'

const Main = () => {
  return (
    <div className='snap-y snap-proximity h-screen overflow-y-scroll'>
      <Header />
      <Banner />
      <Info />
      <Teachers />
      <Statistics />
      <Certificate />
    </div>
  )
}

export default Main