import { CountryType, SetFavSearchCountries, SET_FAV_SEARCHED_COUNTRIES } from "../../types/types"

const setSearchedFavCountries = (searchedResult: CountryType[]): SetFavSearchCountries =>{
    return {
        type: SET_FAV_SEARCHED_COUNTRIES,
        payload: searchedResult
    }
}

export default {
    setSearchedFavCountries
}