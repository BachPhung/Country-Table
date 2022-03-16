import React, { useEffect, useState } from 'react'
import { Favorite } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootStore } from '../../redux/store'
import './Card.scss'
import { IconButton } from "@material-ui/core";
import { CountryType } from '../../types/types'
import favCountriesActions from '../../redux/FavCountry/action'

const Card = () => {
    const dispatch = useDispatch()
    const data = useSelector((state: RootStore) => state.country.data)
    const theme = useSelector((state: RootStore) => state.theme)
    const reduxState: CountryType[] = JSON.parse(localStorage.getItem('favCountries') ?? JSON.stringify([]))
    const [favCountry, setFavCountries] = useState<CountryType[]>(reduxState)
    const NameFavCountries = favCountry.map(f => f.name.common)
    const state = useSelector((state: RootStore) => state)
    useEffect(function(){
        setFavCountries([...state.favCountry])
        localStorage.setItem('favCountries',JSON.stringify(state.favCountry))
    },[state.favCountry])
    return (
        <div className='card-container'>
            {data.length > 0 &&
                <div className='card' >
                    <div className='flag'>
                        <img alt='country flag' src={data[0].flags.png} />
                    </div>
                    <div className='details' style={{ backgroundColor: !theme ? '#f3f4f5' : '#122838', color: theme ? '#f3f4f5' : '#122838' }}>
                        <div className='section'>
                            <div className='section__heading'>{data[0].name.common}</div>
                            <div className='section__content'>
                                <IconButton 
                                    onClick={()=> {
                                        console.log('include: ',NameFavCountries.includes(data[0].name.common));
                                        
                                        if (!NameFavCountries.includes(data[0].name.common))
                                            dispatch(favCountriesActions.ADD_COUNTRY(data[0]))
                                        else{
                                            dispatch(favCountriesActions.REMOVE_COUNTRY(data[0]))
                                        }
                                    }}
                                >
                                    <Favorite style={{ color: NameFavCountries.includes(data[0].name.common) ? 'red' : (theme ? '#f3f4f5' : 'black') }} />
                                </IconButton>
                            </div>
                        </div>
                        <div className='section'>
                            <div className='section__heading'>Capital</div>
                            <div className='section__content'>{data[0].capital !== undefined && data[0].capital[0]}</div>
                        </div>
                        <div className='section'>
                            <div className='section__heading'>Native Name</div>
                            <div className='section__content'>{Object.values(data[0].name.nativeName)[0].common}</div>
                        </div>
                        <div className='section'>
                            <div className='section__heading'>Region</div>
                            <div className='section__content'>{data[0].region}</div>
                        </div>
                        <div className='section'>
                            <div className='section__heading'>Languages</div>
                            <div className='section__content'>{Object.values(data[0].languages).map(item => <span key={item}>{item} </span>)}</div>
                        </div>
                        <div className='section'>
                            <div className='section__heading'>Currencies</div>
                            <div className='section__content'>{data[0].currencies !== undefined && Object.values(data[0].currencies)[0].name}</div>
                        </div>
                        <div className='section'>
                            <div className='section__heading'>Borders</div>
                            <div className='section__content'>{data[0].borders !== undefined && ((data[0].borders).map(item => <span key={item}>{item} </span>))}</div>
                        </div>
                        <div className='section'>
                            <div className='section__heading'>Time Zones</div>
                            <div className='section__content'>{data[0].timezones.map(item => <span key={item}>{item} </span>)}</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Card