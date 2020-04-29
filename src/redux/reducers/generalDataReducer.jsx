import {
    FETCH_GENERAL_DATA_SUCCESS
} from '../actions/getGeneralData';

import {
    SEARCH_BY_COUNTRY
} from '../actions/searchByCountry';

import {COUNTRY_SELECTED} from "../actions/countrySelected";

const initialState = {
    generalData: [],
    generalDataCountries: [],
    countriesStorage: [],
    countrySelected: []
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_GENERAL_DATA_SUCCESS:
            return {
                ...state,
                generalData: action.payload.generalData.Global,
                generalDataCountries: action.payload.generalData.Countries,
                countriesStorage: action.payload.generalData.Countries
            };

        case SEARCH_BY_COUNTRY:
            const regex = new RegExp(`^${action.payload.value}`, 'i');
            let countries = state.countriesStorage;
            countries = countries.filter(n => regex.test(n.Country));
            return {
                ...state,
                generalDataCountries: countries
            };

        case COUNTRY_SELECTED:
            const regexSelected = new RegExp(`^${action.payload}`, 'i');
            countries = state.countriesStorage;
            const country = countries.filter(n => regexSelected.test(n.CountryCode));
            return {
                ...state,
                countrySelected: country,
            };

        default:
            return state;
    }
}
