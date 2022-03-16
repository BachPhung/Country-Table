import { CountryType, SetSearchCountries, SET_SEARCHED_COUNTRIES } from "../../types/types"
const setSearchedCountries = (searchedResult:CountryType[]): SetSearchCountries =>{
    return {
        type: SET_SEARCHED_COUNTRIES,
        payload: searchedResult
    }
}

export default {
    setSearchedCountries
}