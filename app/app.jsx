import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, IndexRoute, hashHistory, Switch } from 'react-router-dom';
import Main from 'Main';
import SearchForm from 'SearchForm';

// Load foundation
require ('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!foundation-sites/dist/css/foundation-float.min.css');

$(document).foundation();

ReactDOM.render(
  <HashRouter history={hashHistory}>
    <Main>
      <Switch>
        <Route path="/" exact component={SearchForm} />
      </Switch>
    </Main>
  </HashRouter>,
document.getElementById('app'));
