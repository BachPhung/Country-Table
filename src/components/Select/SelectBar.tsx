import { TextField, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountriesActions from '../../redux/Countries/action' 
import { RootStore } from '../../redux/store'
import './SelectBar.scss'
const options = [
    {
        value: '1',
        label: 'Name (A-Z)',
    },
    {
        value: '2',
        label: 'Name (Z-A)',
    },
    {
        value: '3',
        label: 'Capital (A-Z)',
    },
    {
        value: '4',
        label: 'Capital (Z-A)',
    },
    {
        value: '5',
        label: 'Population (asc)',
    },
    {
        value: '6',
        label: 'Population (desc)',
    }
];

const SelectBar = () => {
    const [option, setOption] = useState('');
    const dispatch = useDispatch()
    const theme = useSelector((state:RootStore)=>state.theme)
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOption(event.target.value);
    };
    useEffect(function (){
        if(option === '1'){
            dispatch(CountriesActions.sortNameAZ())
        }
        else if(option === '2'){
            dispatch(CountriesActions.sortNameZA())
        }
        else if(option === '3'){
            dispatch(CountriesActions.sortCapitalAZ())
        }
        else if(option === '4'){
            dispatch(CountriesActions.sortCapitalZA())
        }
        else if(option === '5'){
            dispatch(CountriesActions.sortPopuASC())
        }else if(option === '6'){
            dispatch(CountriesActions.sortPopuDESC())
        }
    }, [option, dispatch])
    return (
        <div className="select-container" style={{backgroundColor: theme ? '#122838' : '#f3f4f5' }}>
            <TextField style={{backgroundColor: theme ? '#f3f4f5':' ', height:'56px', borderRadius:'4px'}} className="select" 
                id="outlined-select-currency"
                select
                label="Sort by"
                value={option}
                onChange={handleChange}
                
            >
                {options.map((opt) => (
                    <MenuItem  key={opt.value} value={opt.value}>
                        {opt.label}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
}

export default SelectBar