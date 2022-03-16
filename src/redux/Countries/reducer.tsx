import {COUNTRIES_FAILURE, COUNTRIES_FETCHING, COUNTRIES_SUCCESS, CountriesDispatchTypes, CountryType} from '../../types/types'
type countriesState = {
    loading: boolean,
    data: CountryType[],
    sortedData?: CountryType[] | null
    error?: any
}

const initialState:countriesState = {
    loading: false,
    data: []
}
const reducer = (state:countriesState = initialState, action: CountriesDispatchTypes):countriesState => {
    switch (action.type) {
        case COUNTRIES_FETCHING: {
            return {
                data:[],
                loading: true
            }
        }
        case COUNTRIES_SUCCESS: {
            return {
                loading: false,
                data: action.payload
            }
        }
        case COUNTRIES_FAILURE: {
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        }
        case 'SORT_NAME_A_Z': {
            
            let sortedData:CountryType[] = [...state.data]
                sortedData.sort((a, b) => {
                    var nameA = a.name.common
                    var nameB = b.name.common
                    if (nameA < nameB) {
                      return -1
                    }
                    if (nameA > nameB) {
                      return 1
                    }
                    return 0
            })
            return {
                ...state,
                data: sortedData
            }
        }
        case 'SORT_NAME_Z_A': {
            let sortedData = [...state.data]
                sortedData.sort((a, b) => {
                    var nameA = a.name.common
                    var nameB = b.name.common
                    if (nameA > nameB) {
                      return -1
                    }
                    if (nameA < nameB) {
                      return 1
                    }
                    return 0
            })
            return {
                ...state,
                data: sortedData
            }
        }
        case 'SORT_CAPITAL_A_Z': {
            let sortedData = [...state.data]
                sortedData.sort((a, b) => {
                    var nameA =  a.capital === undefined ? '' : a.capital[0]  
                    var nameB = b.capital === undefined ? '' : b.capital[0] 
                    if (nameA < nameB) {
                      return -1
                    }
                    if (nameA > nameB) {
                      return 1
                    }
                    return 0
            })
            return {
                ...state,
                data: sortedData
            }
        }
        case 'SORT_CAPITAL_Z_A': {
            let sortedData = [...state.data]
                sortedData.sort((a, b) => {
                    var nameA =  a.capital === undefined ? '' : a.capital[0]  
                    var nameB = b.capital === undefined ? '' : b.capital[0] 
                    if (nameA > nameB) {
                      return -1
                    }
                    if (nameA < nameB) {
                      return 1
                    }
                    return 0
            })
            return {
                ...state,
                data: sortedData
            }
        }
        case 'SORT_POPU_ASC': {
            let sortedData = [...state.data]
                sortedData.sort((a, b) => {
                   return Number(a.population) - Number(b.population)
            })
            return {
                ...state,
                data: sortedData
            }
        }
        case 'SORT_POPU_DESC': {
            let sortedData = [...state.data]
                sortedData.sort((a, b) => {
                   return Number(b.population) - Number(a.population )
            })
            return {
                ...state,
                data: sortedData
            }
        }
        default: return state
    }
}

export default reducer