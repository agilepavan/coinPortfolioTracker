import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, IndexRoute, hashHistory, Switch } from 'react-router-dom';
import Main from 'Main';

// Load foundation
require ('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!foundation-sites/dist/css/foundation-float.min.css');

$(document).foundation();

ReactDOM.render(
  <HashRouter history={hashHistory}>
    <Main />
  </HashRouter>,
  document.getElementById('app'));
