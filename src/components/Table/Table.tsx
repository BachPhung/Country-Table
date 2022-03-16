import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import './Table.scss'
import countriesActions from '../../redux/Countries/action'
import favCountriesActions from '../../redux/FavCountry/action'
import searchCountriesActions from '../../redux/SearchedCountries/actions'
import inputActions from '../../redux/SearchInput/actions'
import { Favorite } from '@material-ui/icons'
import SearchBar from '../Search/SearchBar'
import SelectBar from '../Select/SelectBar'
import { RootStore } from '../../redux/store'
import { CountryType } from '../../types/types'
import { IconButton } from '@material-ui/core'
const useStyles = makeStyles({
    root: {
        "& .MuiTableCell-head": {
            color: "#f3f4f5",
            backgroundColor: "#122838",
            transition: 'all 0.5s ease-in-out'
        },
    },
    root2: {
        "& .MuiTableCell-head": {
            color: "#black",
            backgroundColor: "#f3f4f5",
            transition: 'all 0.5s ease-in-out'
        },
    }
})
const TableContent = () => {
    const dispatch = useDispatch()

    const inputSearch = useSelector((state: RootStore) => state.input)
    const data = useSelector((state: RootStore) => state.countries.data)
     const reduxState:CountryType[] = JSON.parse(localStorage.getItem('favCountries')|| JSON.stringify([]))
     const [favCountry, setFavCountries] = useState<CountryType[]>([...reduxState]) 
     const searchedCountries = useSelector((state: RootStore) => state.searchedCountries)
     const theme = useSelector((state: RootStore) => state.theme)
    const state = useSelector((state: RootStore) => state)
    console.log('FavCountry: ',favCountry)
    let nameFavCountries = favCountry.map(f => f.name.common)
    
    useEffect(function(){
        setFavCountries(state.favCountry)
        localStorage.setItem('favCountries',JSON.stringify(state.favCountry))
    },[state.favCountry])
    
    const classes = useStyles()
    useEffect(() => {
        dispatch(inputActions.resetInput())
        data.length === 0 && dispatch(countriesActions.fetchCountries())
    }, [])
    useEffect(() => {
        const arr = [...data]
        const searchCountries: CountryType[] = arr.filter(a => (a.name.common).toLowerCase().includes(inputSearch.toLowerCase()))
        dispatch(searchCountriesActions.setSearchedCountries(searchCountries))
    }, [inputSearch, data])
    
    const columns = [
        { id: "flag", label: "Flag" },
        { id: "name", label: "Name" },
        { id: "region", label: "Region" },
        { id: "capital", label: "Capital" },
        {
            id: "population",
            label: "Population"
        },
        { id: "favourites", label: "Favourites" },
    ]
    return (
        <>
            <SearchBar />
            <SelectBar />
            <div className='table-container' style={{ paddingBottom: '60px', display: 'flex', justifyContent: 'center', backgroundColor: theme ? '#122838' : '#f3f4f5' }}>
                <div style={{ width: '1300px' }}>
                    <TableContainer>
                        <Table stickyHeader aria-label='stickey table'>
                            <TableHead >
                                <TableRow className={theme ? classes.root : classes.root2} >
                                    {columns.map((column) => (
                                        <TableCell className={column.id === 'flag' ? 'flag' : ''}
                                            key={column.id}
                                            align={'left'}
                                            style={{ flex: 1 }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data && searchedCountries.map(item => {
                                    return (
                                        <TableRow hover key={item.name.common}>
                                            {columns.map(column => {
                                                let value
                                                if (column.id === 'name')
                                                    value = item.name.common
                                                else if (column.id === 'flag')
                                                    value = item.flags.png
                                                else if (column.id === 'region' || column.id === 'capital' || column.id === 'population')
                                                    value = item[column.id] || 'DATA MISSING'
                                                else
                                                    value = null
                                                return (
                                                    (value) ?
                                                        <TableCell className={column.id === 'flag' ? 'flag' : ''} key={column.id}>
                                                            {column.id === 'flag'
                                                                ? <div style={{ height: '35px', width: '50px', backgroundImage: `url(${value})`, objectFit: 'contain', backgroundSize: 'contain' }}  ></div>
                                                                : <Link className={theme ? 'link2' : 'link1'} to={`/country/${item.name.common}`}>{value}</Link>
                                                            }
                                                        </TableCell>
                                                        :
                                                        <TableCell
                                                            onClick={()=> {
                                                                if (!nameFavCountries.includes(item.name.common)){
                                                                    console.log('add')
                                                                    
                                                                    dispatch(favCountriesActions.ADD_COUNTRY(item))
                                                                }
                                                                else{
                                                                    console.log('remove')
                                                                    
                                                                    dispatch(favCountriesActions.REMOVE_COUNTRY(item))                                                                    
                                                                }                                                                 
                                                            }}
                                                            key={column.id}>
                                                            <IconButton>
                                                                <Favorite style={{ color: nameFavCountries.includes(item.name.common) ? 'red' : (theme ? '#f3f4f5' : 'black') }} className='icon' />
                                                            </IconButton>
                                                        </TableCell>
                                                )
                                            })}
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    )
}

export default TableContent