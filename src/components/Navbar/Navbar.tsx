import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import Logo from '../../assets/b-p.svg'
import { Brightness4, Brightness6, Favorite, Home } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import themeActions from '../../redux/Theme/action'
import { Link } from 'react-router-dom'
import { RootStore } from '../../redux/store'

const Navbar = () => {
    const dispatch = useDispatch()
    const favCountries = useSelector((state: RootStore) => state.favCountry.length)
    const reduxState: RootStore = JSON.parse(localStorage.getItem('theme') || JSON.stringify(false))
    const [theme, setTheme]: any = useState(reduxState)
    const state = useSelector((state: RootStore) => state)
    useEffect(() => {
        setTheme(state.theme)
        localStorage.setItem('theme', JSON.stringify(state.theme))
    }, [state.theme])
    return (
        <div className={!theme ? 'container' : 'dark_container'}>
            <div className='container__left'>
                <div className='button' style={{ backgroundColor: 'transparent' }} >
                    <Link to='/'>
                        <img alt='logo ' className='icon' src={Logo} />
                    </Link>
                </div>
            </div>
            <div className='container__right'>
                <div className={'icon-container'} >
                    <div><Link to='/' className={!theme ? 'link' : 'link3'}><Home className='icon' /></Link></div>
                    {
                        !theme
                            ? <div className={theme ? 'link3' : 'link'} onClick={() => dispatch(themeActions.NIGHT_MODE())}><Brightness4 className='icon' /></div>
                            : <div className={theme ? 'link3' : 'link'} onClick={() => dispatch(themeActions.LIGHT_MODE())}><Brightness6 className='icon' /></div>
                    }
                    <Badge className='icon' badgeContent={favCountries} color="secondary">
                        <Link className={theme ? 'link3' : 'link'} to='/favourites'><div><Favorite /></div></Link>
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Navbar