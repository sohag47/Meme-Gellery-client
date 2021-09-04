import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

//? All Components
import Home from '../components/home/Home';
import NotFound from './NotFound';
import MemeStats from '../components/stats/MemeStats';



export default class RouterURL extends Component {
    render() {
        return (
            <>
              <Switch>
                  <Route exact path='/' component={Home} ></Route>
                  <Route path='/statistics' component={MemeStats} ></Route>
                  <Route path='*' component={NotFound}></Route>
              </Switch>  
            </>
        )
    }
}
