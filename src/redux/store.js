import {createStore, combineReducers, applyMiddleware} from 'redux';
import generalData from './reducers/generalDataReducer';
import detailByCountry from './reducers/detailByContry';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    generalData,
    detailByCountry
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
