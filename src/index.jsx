import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, browserHistory } from 'react-router';
import routes from '../components/config/routes';
import './main.css';

const history = browserHistory;

history.listen((location) => {
  setTimeout(() => {
    if (location.action === 'POP') return;
    window.scrollTo(0, 0);
  });
});

window.React = React;
injectTapEventPlugin();
ReactDOM.render((
  <Router history={history} routes={routes} />
), document.getElementById('root'));
