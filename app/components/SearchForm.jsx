import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
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
            className="inputs"
            label="Your Api Key"
            value=""
          />
          <Input
            className="inputs"
            label="Your Secret Value"
            value=""
          />
          <Button>Get Coins</Button>
        </form>
      </div>
  )
  }
};

export default SearchForm;
