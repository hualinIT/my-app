import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'pages/home';
import Member from 'pages/Member';
import SetState from 'pages/SetState';
import ProviderNew from 'pages/ProviderNew';
import ProviderOld from 'pages/ProviderOld';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/member" component={Member}/>
            <Route path="/setState" component={SetState}/>
            <Route path="/providerNew" component={ProviderNew}/>
            <Route path="/providerOld" component={ProviderOld}/>
        </div>
    </Router>
)

export default Routes;