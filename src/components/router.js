import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import StoreNotFound from './StoreNotFound';

const Router =()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={StorePicker}/>
                <Route path='/store/:storeId' component={App}/>
                <Route component={StoreNotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;