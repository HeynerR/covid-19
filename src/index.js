import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import './index.scss';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/header';
import GeneralData from './components/general';
import DetailByCountry from './components/detail';

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path="/detail/:country" component={DetailByCountry}/>
                <Route exact path="/" component={GeneralData}/>
                <Route render={ () => <h1>404 Error</h1> } />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
