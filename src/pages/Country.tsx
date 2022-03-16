import { KeyboardBackspace } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import './Country.scss'
import CountryActions from '../redux/Country/action'
import Card from '../components/Card/Card'
import {useDispatch, useSelector} from 'react-redux'
import { RootStore } from '../redux/store'
const SingleCountry = () => {
    type CountryName = {
        countryName:string
    }
    const dispatch = useDispatch()
    const country = useParams<CountryName>().countryName
    const theme = useSelector((state:RootStore)=>state.theme)
    useEffect(()=>{
        dispatch(CountryActions.fetchCountry(country))
    },[])

    return (
        <div className='country-container' style={{backgroundColor: theme ? '#122838' : '#f3f4f5'}}>
            <Navbar/>
            <Link to='/' className='link'>
            <KeyboardBackspace className='arrow icon' style={{color: theme ?  '#f3f4f5':'#122838'}}/>
            </Link>
            <Card/>
        </div>
    )
}

export default SingleCountry