import CountryReducer from './Country/reducer'
import CountriesReducer from './Countries/reducer'
import FavCountryReducer from './FavCountry/reducer'
import ThemeReducer from './Theme/reducer'
import InputReducer from './SearchInput/reducer'
import SearchCountriesReducer from './SearchedCountries/reducer'
import { combineReducers } from 'redux'
import SearchFavCountriesReducer from './SearchedFavCountries/reducer'
export const rootReducer = combineReducers({
    country: CountryReducer,
    countries: CountriesReducer,
    favCountry: FavCountryReducer,
    theme: ThemeReducer,
    input: InputReducer,
    searchedCountries: SearchCountriesReducer,
    searchedFavCountries: SearchFavCountriesReducer
})
