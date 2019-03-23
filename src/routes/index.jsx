import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'pages/home';
import Member from 'pages/Member';
import About from 'pages/about';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/member" component={Member}/>
            <Route path="/about" component={About}/>
        </div>
    </Router>
)

export default Routes;