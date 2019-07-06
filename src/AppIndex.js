import React, {Component} from 'react';
//react-router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//pages
import HooksPage from './pages/hooksPage/index';
import ContextPage from './pages/contextPage/index';
import HomePage from './pages/homePage/index';

class AppIndex extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path={`/`} component={HomePage}/>
                        <Route exact path={`/context`} component={ContextPage}/>
                        <Route exact path={`/hooks`} component={HooksPage}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default AppIndex;
