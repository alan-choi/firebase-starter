import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
import store, { history } from './store/store';
import ReduxApp from './ReduxApp';

const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: ReduxApp,
    childRoutes: [
      require('./routes/createTrip'),
      require('./routes/login'),
      require('./routes/signUp')
    ]
  }
  ]
}


const app = (
  <Provider store={store}>
    <Router history={history} routes={rootRoute}>
    </Router>
  </Provider>
)

render(app, document.getElementById('root'));
