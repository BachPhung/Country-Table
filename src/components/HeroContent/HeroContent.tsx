import React from 'react'
import './HeroContent.scss'
import {useSelector} from 'react-redux'
import { RootStore } from '../../redux/store'
type HeroContentProps = {
  subtitle:string
}
const HeroContent = ({subtitle}: HeroContentProps) => {
  const theme = useSelector((state:RootStore)=>state.theme)
  return (
    <div className={theme? 'dark-hero-container':'hero-container'}>
        <div className='title'>THE EARTH <div className='dot'></div></div>
        <div className='sub-title'>{subtitle}</div>
    </div>
  )
}

export default HeroContent