export const SEARCH_BY_COUNTRY = 'SEARCH_BY_COUNTRY';

export default function searchByCountry(value) {
    return dispatch => {
        return dispatch({
            type: SEARCH_BY_COUNTRY,
            payload: {value}
        });
    };
}
