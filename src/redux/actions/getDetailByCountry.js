export const FETCH_DETAIL_BY_COUNTRY = 'FETCH_DETAIL_BY_COUNTRY';

export const fetchGeneralDataSuccess = detail => ({
    type: FETCH_DETAIL_BY_COUNTRY,
    payload: detail
});

export default function fetchGeneralData(country) {
    return dispatch => {
        return fetch(`https://api.covid19api.com/dayone/country/${country}`)
            .then(res => res)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchGeneralDataSuccess(json));
                return json;
            });
    };
}
