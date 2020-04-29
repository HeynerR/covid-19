export const COUNTRY_SELECTED = 'COUNTRY_SELECTED';

export default function fetchGeneralData(country) {
    return dispatch => {
        dispatch({
            type: COUNTRY_SELECTED,
            payload: country
        });
    };
}
