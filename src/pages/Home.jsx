import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import Featured from '../components/Featured'  

const Home = () => {
  return (
    <>
     <Hero>
      <Banner title="luxurious rooms" subtititle="deluxe room starting at $299">
        <Link to="/rooms" className='btn-primary'>
          our rooms
        </Link>
      </Banner>
     </Hero>
     <Services />
     <Featured /> 
    </>
  )
}
export default Home
