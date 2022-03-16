

import { COUNTRY_FETCHING, CountryDispatchTypes, COUNTRY_SUCCESS, COUNTRY_FAILURE } from "../../types/types"
import axios from "axios"
import { Dispatch } from "redux"

const fetchCountry = (nameCountry:string) => async (dispatch:Dispatch<CountryDispatchTypes>) => {
    try{
        dispatch({
            type: COUNTRY_FETCHING
        })
        const res = await axios.get(`https://restcountries.com/v3.1/name/${nameCountry}`)
        dispatch({
            type: COUNTRY_SUCCESS,
            payload: res.data
        })
    }
    catch(err){
        dispatch({
            type: COUNTRY_FAILURE,
            payload:err
        })
    }
}
export default {
    fetchCountry
}