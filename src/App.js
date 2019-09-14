import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/landing/landing.component';
import Header from './components/header/header.components';

import './_App.scss';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  </div>
);

export default App;
