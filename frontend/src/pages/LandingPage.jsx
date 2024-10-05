import React from 'react'
import '../styles/landingpage.css'
import Navbar from '../Component/Navbar'
import FirstBodyContainer from '../Component/FirstBodyContainer'
import SecondBodyContainer from '../Component/SecondBodyContainer'
import ThirdBodyContainer from '../Component/ThirdBodyContainer'
import LandingPageFooter from '../Component/LandingPageFooter'

const LandingPage = () => {
  return (
    <>
 <Navbar/>
 <FirstBodyContainer/>
 <SecondBodyContainer/>
 <ThirdBodyContainer />
 <LandingPageFooter/>
    
    </>
  )
}

export default LandingPage