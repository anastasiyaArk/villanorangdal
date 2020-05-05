// Dependencies
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import loadable from "@loadable/component";
import { PrerenderedComponent } from "react-prerendered-component";
import WebFont from 'webfontloader';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF,
  faInstagram,
  faTripadvisor
} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faSkiingNordic, faHotel } from '@fortawesome/free-solid-svg-icons';


// Components
import Footer from 'components/partials/Footer'
import NavigationBar from 'components/partials/NavigationBar'

// Utils
import configureStore, { history } from 'utils/configureStore'

// Stylesheets
import style from 'App.module.scss';
import { Container } from 'react-bootstrap';

const prerenderedLoadable = dynamicImport => {
  const LoadableComponent = loadable(dynamicImport);
  return React.memo(props => (
    <PrerenderedComponent live={LoadableComponent.load()}>
      <LoadableComponent {...props} />
    </PrerenderedComponent>
  ));
};

const Home = prerenderedLoadable(() => import("./components/routes/Home"));
const Hotel = prerenderedLoadable(() => import("./components/routes/Hotel"));
const Activities = prerenderedLoadable(() => import("./components/routes/Activities"));
const Gallery = prerenderedLoadable(() => import("./components/routes/Gallery"));
const Booking = prerenderedLoadable(() => import("./components/routes/Booking"));
//const NotFound = prerenderedLoadable(() => import("./components/routes/NotFound"));

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
const initialState = {};

WebFont.load({
  google: {
    families: ['Roboto:400,700&display=swap']
  }
});

library.add(faFacebookF, faInstagram, faTripadvisor, faHeart, faSkiingNordic, faHotel)

const store = configureStore(preloadedState || initialState)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Container>
          <NavigationBar />
          <div className={style.container}>
            <Switch>
              <Route exact={true} strict={true} path="/activities/" render={() => (<Activities />)} />
              <Route exact={true} strict={true} path="/:selectedLanguage/activities/" render={(props) => (<Activities {...props} />)} />

              <Route exact={true} strict={true} path="/hotel/" render={() => (<Hotel />)} />
              <Route exact={true} strict={true} path="/:selectedLanguage/hotel/" render={(props) => (<Hotel {...props} />)} />

              <Route exact={true} strict={true} path="/gallery/" render={() => (<Gallery />)} />
              <Route exact={true} strict={true} path="/:selectedLanguage/gallery/" render={(props) => (<Gallery {...props} />)} />

              <Route exact={true} strict={true} path="/booking/" render={() => (<Booking />)} />
              <Route exact={true} strict={true} path="/:selectedLanguage/booking/" render={(props) => (<Booking {...props} />)} />

              <Route exact={true} strict={true} path="/:selectedLanguage/" render={(props) => (<Home {...props} />)} />
              <Route exact={true} strict={true} path="/" render={() => (<Home />)} />


            </Switch>
            <Footer />
          </div>
          </Container>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
