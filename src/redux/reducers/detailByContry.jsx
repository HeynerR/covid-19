import {
    FETCH_DETAIL_BY_COUNTRY
} from '../actions/getDetailByCountry';

const initialState = {
    detailByCountry: []
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DETAIL_BY_COUNTRY:

            return {
                ...state,
                detailByCountry: action.payload
            };

        default:
            return state;
    }
}
