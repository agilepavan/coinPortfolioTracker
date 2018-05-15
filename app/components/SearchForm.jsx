import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { view, lensPath } from 'ramda';
import Input from '../../app/components/shared/Input.jsx';
import Button from '../../app/components/shared/Button.jsx';
import '../../src/styles/scss/components/Input.scss';

class SearchForm extends Component {
  onFormSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <Input
            id="api-key"
            className="inputs"
            label="Your Api Key"
            ref="apiKey"
          />
          <Input
            id="api-secret"
            className="inputs"
            label="Your Secret Value"
            ref="apiSecret"
          />
          <Button>Get Coins</Button>
        </form>
      </div>
  )
  }
};

export default SearchForm;
