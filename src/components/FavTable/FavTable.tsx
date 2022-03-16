import React, { useEffect, useState } from 'react'
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import favCountriesActions from '../../redux/FavCountry/action'
import searchFavCountriesActions from '../../redux/SearchedFavCountries/action'
import { DeleteOutline } from '@material-ui/icons'
import SearchBar from '../Search/SearchBar'
import { makeStyles } from '@material-ui/core/styles'
import { RootStore } from '../../redux/store'
import { CountryType } from '../../types/types'
const FavTable = () => {
    const dispatch = useDispatch()
    const data = useSelector((state: RootStore) => state.favCountry)
    const theme = useSelector((state: RootStore) => state.theme)
    const inputSearch = useSelector((state: RootStore) => state.input)
    const searchedFavCountries = useSelector((state: RootStore) => state.searchedFavCountries)
    const reduxState: CountryType[] = JSON.parse(localStorage.getItem('favCountries') || JSON.stringify([]))
    const [favCountry, setFavCountries] = useState<CountryType[]>(reduxState)
    const state = useSelector((state: RootStore) => state)
    const nameFavCountries = data.map(f => f.name.common)
    const columns = [
        { id: "flag", label: "Flag" },
        { id: "name", label: "Name" },
        { id: "region", label: "Region" },
        { id: "capital", label: "Capital" },
        {
            id: "population",
            label: "Population"
        },
        { id: "remove", label: "Remove" },
    ]
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

    useEffect(() => {
        const arr = [...data]
        const searchFavCountries = arr.filter(a => a.name.common.toLowerCase().includes(inputSearch.toLowerCase()))
        dispatch(searchFavCountriesActions.setSearchedFavCountries(searchFavCountries))
        console.log(searchFavCountries)
    }, [inputSearch, data, dispatch])

    useEffect(() => {
        setFavCountries(state.favCountry)
        localStorage.setItem('favCountries', JSON.stringify(state.favCountry))
    }, [state.favCountry])
    const classes = useStyles()
    return (
        <>
            <SearchBar />
            <div style={{ display: 'flex', paddingBottom: '60px', justifyContent: 'center', backgroundColor: theme ? '#122838' : '#f3f4f5', transition: 'all 0.5s ease-in-out' }}>
                <div style={{ width: '1300px' }}>
                    <TableContainer>
                        <Table stickyHeader aria-label='stickey table'>
                            <TableHead>
                                <TableRow className={theme ? classes.root : classes.root2}>
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
                                {data && searchedFavCountries.map(item => {
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
                                                    value ?
                                                        (<TableCell className={column.id === 'flag' ? 'flag' : ''} key={column.id}>
                                                            {column.id === 'flag'
                                                                ? <div style={{ height: '35px', width: '50px', backgroundImage: `url(${value})`, objectFit: 'contain', backgroundSize: 'contain' }}  ></div>
                                                                : <Link className={theme ? 'link2' : 'link1'} to={`/country/${item.name.common}`}>{value}</Link>
                                                            }
                                                        </TableCell>)
                                                        :
                                                        <TableCell onClick={function () {
                                                            dispatch(favCountriesActions.REMOVE_COUNTRY(item))
                                                        }}
                                                            key={column.id}>
                                                            <DeleteOutline style={{ color: nameFavCountries.includes(item.name.common) ? 'red' : (theme ? '#f3f4f5' : 'black') }} className='icon' />
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

export default FavTable