import React from 'react'
import App from './App'
import Banner from './components/Banner'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function Controller() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/help" component={Banner}/>
            </Switch>
        </Router>
    )
}
