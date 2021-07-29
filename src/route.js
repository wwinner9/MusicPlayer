import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './components/login/index';
import Main from  './components/main/index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/main" component={Main} />
            </Switch>
        </BrowserRouter>
    );
}