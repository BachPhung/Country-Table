import { SearchOutlined } from '@material-ui/icons'
import React from 'react'
import './SearchBar.scss'
import { useDispatch, useSelector } from 'react-redux'
import InputAction from '../../redux/SearchInput/actions'
import { RootStore } from '../../redux/store'
const SearchBar = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state:RootStore)=>state.theme)
  return (
    <div className='search-container' style={{backgroundColor: theme ? '#122838' : '#f3f4f5' }}>
      <div className='search-wrapper' >
        <SearchOutlined className='icon search'/>
        <input 
          placeholder='Search by country, capital or region...'
          className='input'
          onChange={(e)=>dispatch(InputAction.onChangeInput(e.target.value))}
          style = {{backgroundColor: '#f3f4f5'}}
          value= {useSelector((state:RootStore)=>state.input)}
        >
        </input>
      </div>
    </div>
  )
}

export default SearchBar