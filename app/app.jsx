import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Route, HashRouter, IndexRoute, hashHistory, Switch } from 'react-router-dom';
import Main from '../app/components/Main.jsx';
import SearchForm from '../app/components/SearchForm.jsx';


ReactDOM.render(
  <HashRouter history={hashHistory}>
    <Main>
      <Switch>
        <Route path="/" exact component={SearchForm} />
      </Switch>
    </Main>
  </HashRouter>,
document.getElementById('app'));
