import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import LandingPage from './pages/landing/landing.component';
import Header from './components/header/header.components';
import Modal from './components/modal/modal.component';
import './_App.scss';

import { auth, createUserProfDoc } from './firebase/firebase.utils';

class App extends Component {
  state = {
    user: null,
  };

  // for unsucscribe open subscriptin(google auth)
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      this.setState({ user });
      await createUserProfDoc(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* for changing header by auth */}
        <Header user={this.state.user} />
        <Modal />
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
