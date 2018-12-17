import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';

import store, { history } from './store';

import Service from './containers/Service';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" component={Service} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
