import { CountryDispatchTypes, CountryType, COUNTRY_FAILURE, COUNTRY_FETCHING, COUNTRY_SUCCESS } from "../../types/types"

type countryState = {
    loading: boolean,
    data: CountryType[]
    err?: any
}

const initialState: countryState = {
    loading:false,
    data:[]
}
const reducer = (state:countryState=initialState,action: CountryDispatchTypes):countryState =>{
    switch(action.type){
        case COUNTRY_FETCHING:{
            return{
                ...state,
                loading:true
            }
        }
        case COUNTRY_SUCCESS:{
            return{
                loading:false,
                data: action.payload,
                err: ''
            }
        }
        case COUNTRY_FAILURE:{
            return{
                loading:false,
                err: action.payload,
                data:[]
            }
        }
        default: return state
    }
}

export default reducer