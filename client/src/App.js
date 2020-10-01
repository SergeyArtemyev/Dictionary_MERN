import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Skeleton from './components/dictionary/layout/skeleton/Skeleton';
import Alert from './components/layout/Alert';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          {/* <Navbar /> */}
          <Route exact path='/' component={Landing} />
          <Alert />
          <section>
            <Switch>
              <PrivateRoute exact path='/dictionary' component={Skeleton} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
