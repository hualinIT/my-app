import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'pages/home';
import Member from 'pages/Member';
import SetState from 'pages/SetState';
import Provider from 'pages/Provider';
import ProviderOld from 'pages/ProviderOld';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/member" component={Member}/>
            <Route path="/setState" component={SetState}/>
            <Route path="/provider" component={Provider}/>
            <Route path="/providerOld" component={ProviderOld}/>
        </div>
    </Router>
)

export default Routes;