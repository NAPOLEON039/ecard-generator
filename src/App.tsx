import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import GenerateCard from './pages/GenerateCard'

const App = (): JSX.Element => (
    <Router>
        <div className="app">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/generate-ecard" component={GenerateCard} />
            </Switch>
        </div>
    </Router>
)

export default App