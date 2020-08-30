import React, { Component } from 'react';

import { Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';
import Button from '@material-ui/core/Button'

import Home from './Home.js';
import Trello from './Trello.js';
import Login from './Login';
import { AuthProvider } from './Auth';
import { PrivateRoute } from './PrivateRoute.js';

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {

    };
  }*/
  render() {
    return (
      
        <AuthProvider>
          <div>
            <nav>
                <span className='App'><Button variant='contained' type='button'>
                  <Link to='/'>Home</Link>
                </Button>
                </span>
                <span className='App'>
                <Button variant='contained' className='button-Login' type='button'>
                  <Link to='/login'>Login</Link>
                </Button>
                </span>
                <span className='App'>
                <Button variant='contained' className='button-Trello' type='button'>
                  <Link to='/trello'>Trello</Link>
                </Button>
                </span>
            </nav>
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <PrivateRoute path='/trello'>
                <Trello />
              </PrivateRoute>
              <Route path='/'>
                <Home />
              </Route>
              <Redirect to='/'/>
            </Switch>
          </div>
        </AuthProvider>
        
      
    )
  }
}

export default App;