import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import LandingPage from './pages/landing/landing.component';
import Header from './components/header/header.components';
import ModalContentSelecter from './components/modal/modal.component';
import './_App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ModalContentSelecter />
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
