import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';

import Badges from '../pages/Badges';
import BadgeNew  from '../pages/BadgesNew';
import Layout from './Layout';
import NotFount from '../pages/NotFount';
import BadgeIndex from '../pages/BadgeIndex'

function App() {
    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/bages" component={Badges}></Route>
                <Route exact path="/bages/new" component={BadgeNew}></Route>
                <Route exact path="/" component={BadgeIndex}></Route>
                <Route component={NotFount}></Route>
                
            </Switch>
        </Layout>
          
        </BrowserRouter>
    )
}

export default App;