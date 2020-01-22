import React from 'react';
import App from '../App';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './HomePage';
import RegisterPage from './RegisterPage';

const Routes = () => {
  return (
    <App>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/register' component={RegisterPage} />
      </Switch>
    </App>
  );
};

export default Routes;
