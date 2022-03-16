import { ADD_COUNTRY, CountryType, FavCountryDispatchTypes, REMOVE_COUNTRY } from "../../types/types"

const initialState:CountryType[] =  JSON.parse(localStorage.getItem('favCountries')|| JSON.stringify([]))
//const initialState:CountryType[] =  []
const reducer = (state:CountryType[]=initialState,action: FavCountryDispatchTypes): CountryType[]=>{
    switch(action.type){
        case ADD_COUNTRY:{
            return [...state,action.payload]
        }
        case REMOVE_COUNTRY:{
            return state.filter(s=>JSON.stringify(s)!==JSON.stringify(action.payload))
        }
        default: return state
    }
}

export default reducer