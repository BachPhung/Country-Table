export const COUNTRIES_FETCHING = 'COUNTRIES_FETCHING' 
export const COUNTRIES_SUCCESS = 'COUNTRIES_SUCCESS' 
export const COUNTRIES_FAILURE = 'COUNTRIES_FAILURE' 
export const SORT_NAME_A_Z = 'SORT_NAME_A_Z'
export const SORT_NAME_Z_A = 'SORT_NAME_Z_A'
export const SORT_CAPITAL_A_Z = 'SORT_CAPITAL_A_Z'
export const SORT_CAPITAL_Z_A = 'SORT_CAPITAL_Z_A'
export const SORT_POPU_ASC = 'SORT_POPU_ASC'
export const SORT_POPU_DESC = 'SORT_POPU_DESC'

export const COUNTRY_FETCHING = 'COUNTRY_FETCHING'
export const COUNTRY_SUCCESS = 'COUNTRY_SUCCESS'
export const COUNTRY_FAILURE = 'COUNTRY_FAILURE'

export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'

export const SET_SEARCHED_COUNTRIES = 'SET_SEARCHED_COUNTRIES'

export const SET_FAV_SEARCHED_COUNTRIES = 'SET_FAV_SEARCHED_COUNTRIES'

export const NIGHT_MODE = 'NIGHT_MODE'
export const LIGHT_MODE = 'LIGHT_MODE'

export type CountryCurrency = {
    [key:string]:CountryCurrenciesVal
}
export type CountryCurrenciesVal = {
    name: string,
    symbol:string
}
export type CountryNativeNameVal = {
    common: string,
    official:string
}
export type CountryNativeName = {
    [key:string]:CountryNativeNameVal
}
export type CountryFlags = {
    png:string
}
export type CountryName = {
    common:string,
    nativeName: CountryNativeName
}
export type CountryLangs = {
    [key:string]:string
}
export type CountryType = {
    name: CountryName,
    capital: string[],
    borders: string[],
    population: string,
    currencies: CountryCurrency,
    flags: CountryFlags,
    region:string,
    languages: CountryLangs,
    timezones: string[]
}
export type CountriesLoading = {
    type: typeof COUNTRIES_FETCHING
}
export type CountriesSuccess = {
    type: typeof COUNTRIES_SUCCESS,
    payload: CountryType[]
}
export type CountriesFailure = {
    type: typeof COUNTRIES_FAILURE,
    payload: unknown
}
export type SortNameAZ = {
    type: typeof SORT_NAME_A_Z
}
export type SortNameZA = {
    type: typeof SORT_NAME_Z_A
}
export type SortCapitalAZ = {
    type: typeof SORT_CAPITAL_A_Z
}
export type SortCapitalZA = {
    type: typeof SORT_CAPITAL_Z_A
}
export type SortPopuASC = {
    type: typeof SORT_POPU_ASC
}
export type SortPopuDESC = {
    type: typeof SORT_POPU_DESC
}

export type CountriesDispatchTypes = CountriesLoading | CountriesSuccess | CountriesFailure |
                                   SortNameAZ | SortNameZA | SortCapitalAZ | SortCapitalZA |
                                   SortPopuASC | SortPopuDESC

export type CountryLoading = {
    type: typeof COUNTRY_FETCHING
}
export type CountrySuccess = {
    type: typeof COUNTRY_SUCCESS,
    payload: CountryType[]
}
export type CountryFailure = {
    type: typeof COUNTRY_FAILURE,
    payload: unknown
}


export type CountryDispatchTypes = CountryLoading | CountrySuccess | CountryFailure

export type AddCountry = {
    type: typeof ADD_COUNTRY
    payload: CountryType
}
export type RemoveCountry = {
    type: typeof REMOVE_COUNTRY
    payload: CountryType
}

export type FavCountryDispatchTypes = AddCountry | RemoveCountry

export type SetSearchCountries = {
    type: typeof SET_SEARCHED_COUNTRIES,
    payload:  CountryType[]
}

export type SearchCountriesDispatchTypes = SetSearchCountries

export type SetFavSearchCountries = {
    type: typeof SET_FAV_SEARCHED_COUNTRIES,
    payload:  CountryType[]
}

export type SearchFavCountriesDispatchTypes = SetFavSearchCountries

export type NightMode = {
    type: typeof NIGHT_MODE
}
export type LightMode = {
    type: typeof LIGHT_MODE
}

export type ThemeDispatchTypes = NightMode | LightMode