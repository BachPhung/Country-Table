import { AddCountry, CountryType, RemoveCountry } from "../../types/types"
const ADD_COUNTRY = (country: CountryType): AddCountry =>{
    return {
        type: 'ADD_COUNTRY',
        payload: country
    }
}
const REMOVE_COUNTRY = (country: CountryType): RemoveCountry =>{
    return {
        type: 'REMOVE_COUNTRY',
        payload: country
    }
}

export default {
    ADD_COUNTRY,
    REMOVE_COUNTRY
}