import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import LandingPage from './pages/landing/landing.component';
import Header from './components/header/header.components';
import Modal from './components/modal/modal.component';

import './_App.scss';

class App extends Component {
  state = {
    show: false,
  };

  showModal = () => {
    const { show } = this.state;

    this.setState({
      ...this.state,
      show: !show,
    });
    console.log(show);
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        <Header />
        <input type="button" value="Show Modal" onClick={this.showModal} />
        <Modal show={show} onClose={this.showModal}>
          This is message is from Modal
        </Modal>
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
