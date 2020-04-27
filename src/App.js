// Dependencies
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookF,
  faInstagram,
  faTripadvisor
} from '@fortawesome/free-brands-svg-icons'
import { faGripHorizontal, faListUl, faLanguage, faChevronDown, faPhotoVideo } from '@fortawesome/free-solid-svg-icons'

// Components
import Footer from 'components/partials/Footer'
import NavigationBar from 'components/partials/NavigationBar'
import Home from 'components/routes/Home'
import Activities from 'components/routes/Activities'
import Hotel from 'components/routes/Hotel'
import Room from 'components/routes/Room'
import Gallery from 'components/routes/Gallery'
import Booking from 'components/routes/Booking'

// Utils
import configureStore, { history } from 'utils/configureStore'

// Stylesheets
import style from 'App.module.scss';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
const initialState = {};

library.add(faFacebookF, faInstagram, faTripadvisor, faGripHorizontal, faListUl, faLanguage, faChevronDown, faPhotoVideo)

const store = configureStore(preloadedState || initialState)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <NavigationBar />
          <div className={style.container}>
            <Switch>
              <Route exact={true} strict={true} path="/home/" render={() => (<Home />)} />
              <Route exact={true} strict={true} path="/activities/" render={() => (<Activities />)} />
              <Route exact={true} strict={true} path="/hotel/" render={() => (<Hotel />)} />
              <Route exact={true} strict={true} path="/room/" render={() => (<Room />)} />
              <Route exact={true} strict={true} path="/gallery/" render={() => (<Gallery />)} />
              <Route exact={true} strict={true} path="/booking/" render={() => (<Booking />)} />
            </Switch>
            <Footer />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
