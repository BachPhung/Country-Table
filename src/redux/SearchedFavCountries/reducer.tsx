import { CountryType, SearchFavCountriesDispatchTypes, SET_FAV_SEARCHED_COUNTRIES } from "../../types/types"

const initialState:CountryType[] = []

const reducer = (state:CountryType[] = initialState,action: SearchFavCountriesDispatchTypes): CountryType[] =>{
    switch(action.type){
        case SET_FAV_SEARCHED_COUNTRIES:{
            return action.payload
        }
        default: return state
    }
}

export default reducer