import React from 'react'
import HeroContent from '../components/HeroContent/HeroContent'
import Navbar from '../components/Navbar/Navbar'
import TableContent from '../components/Table/Table'
import Scroll from '../components/Scroll/Scroll'
const Home = () => {
  return (
    <div>
        <Scroll showBelow={250}/>
        <Navbar/>
        <HeroContent subtitle={'WE RISE TOGETHER'}/>
        <TableContent/>
    </div>
  )
}

export default Home