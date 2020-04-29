export const FETCH_GENERAL_DATA_SUCCESS = 'FETCH_GENERAL_DATA_SUCCESS';

export const fetchGeneralDataSuccess = generalData => ({
    type: FETCH_GENERAL_DATA_SUCCESS,
    payload: {generalData}
});

export default function fetchGeneralData() {
    return dispatch => {
        return fetch("https://api.covid19api.com/summary")
            .then(res => res.json())
            .then(json => {
                dispatch(fetchGeneralDataSuccess(json));
                return json;
            });
    };
}
