import React from 'react'
import Header from '../_components/header/Header'
import Banner from '../_components/banner/Banner'
import Info from '../_components/info/Info'
import Teachers from '../_components/teachers/Teachers'
import Statistics from '../_components/statistics/Statistics'
import Certificate from '../_components/certificate/Certificate'
import Programs from '../_components/programs/Programs'
import Specialities from '../_components/specialities/Specialities'
import Footer from '../_components/footer/Footer'
import Explanation from '../_components/explanation/Explanation'

const Main = () => {
  return (
    <div className='snap-y snap-proximity overflow-y-scroll scroll-smooth md:scroll-auto h-screen'>
      <Header />
      <Banner />
      <Info />
      <Teachers />
      <Statistics />
      <Specialities />
      <Certificate />
      <Programs />
      <Explanation />
      <Footer />
    </div>
  )
}

export default Main