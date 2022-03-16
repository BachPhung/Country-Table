import axios from "axios"
import { COUNTRIES_FAILURE, COUNTRIES_FETCHING, COUNTRIES_SUCCESS, SORT_CAPITAL_A_Z, SORT_CAPITAL_Z_A, SORT_NAME_A_Z, SORT_NAME_Z_A, SORT_POPU_ASC, SORT_POPU_DESC, CountriesDispatchTypes, SortNameAZ, SortNameZA, SortCapitalAZ, SortCapitalZA, SortPopuASC, SortPopuDESC} from "../../types/types"
import { Dispatch } from "redux"

const sortNameAZ = (): SortNameAZ => {
    return {
        type: SORT_NAME_A_Z
    }
}

const sortNameZA = (): SortNameZA => {
    return {
        type: SORT_NAME_Z_A
    }
}
const sortCapitalAZ = (): SortCapitalAZ => {
    return {
        type: SORT_CAPITAL_A_Z
    }
}
const sortCapitalZA = (): SortCapitalZA => {
    return {
        type: SORT_CAPITAL_Z_A
    }
}

const sortPopuASC = (): SortPopuASC => {
    return {
        type: SORT_POPU_ASC
    }
}
const sortPopuDESC = (): SortPopuDESC => {
    return {
        type: SORT_POPU_DESC
    }
}

const fetchCountries = () => async (dispatch:Dispatch<CountriesDispatchTypes>) => {
    try{
        dispatch({
            type: COUNTRIES_FETCHING
        })
        const res = await axios.get('https://restcountries.com/v3.1/all')
        dispatch({
            type: COUNTRIES_SUCCESS,
            payload: res.data
        })
    }
    catch(err){
        dispatch({
            type: COUNTRIES_FAILURE,
            payload:err
        })
    }
}

export default {
    fetchCountries,
    sortNameAZ,
    sortNameZA,
    sortCapitalAZ,
    sortCapitalZA,
    sortPopuASC,
    sortPopuDESC
}