import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import LandingPage from './pages/landing/landing.component';
import Header from './components/header/header.components';
import Modal from './components/modal/modal.component';
import './_App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Modal />
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
