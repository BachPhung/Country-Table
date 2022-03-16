import React from 'react'
import HeroContent from '../components/HeroContent/HeroContent'
import Navbar from '../components/Navbar/Navbar'
import FavTable from '../components/FavTable/FavTable'
import Scroll from '../components/Scroll/Scroll'
const FavNations = () => {
  return (
    <div>
      <Scroll showBelow={250}/>
      <Navbar />
      <HeroContent subtitle={'YOUR FAVOURITE LIST'} />
      <FavTable />
    </div>
  )
}

export default FavNations