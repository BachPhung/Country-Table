import { CountryType, SearchCountriesDispatchTypes, SET_SEARCHED_COUNTRIES } from "../../types/types"
const initialState:CountryType[] = []

const reducer = (state:CountryType[] = initialState,action: SearchCountriesDispatchTypes): CountryType[] =>{
    switch(action.type){
        case SET_SEARCHED_COUNTRIES:{
            return action.payload
        }
        default: return state
    }
}

export default reducer