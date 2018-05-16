import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { view, lensPath } from 'ramda';
import Input from '../../app/components/shared/Input.jsx';
import Button from '../../app/components/shared/Button.jsx';
import '../../src/styles/scss/components/Input.scss';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      apiKey: '',
      apiSecret: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('https://bittrex.com/api/v1.1/public/getmarkets', {
      mode: 'no-cors',
      header: {
        'Access-Control-Allow-Origin':'*',
      }
    }).then(res => {
      return res.body ? JSON.parse(res.body) : null;
    }).then(api =>{
      console.log(JSON.stringify(api));
    });
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Your Api Key
        <input
          id="api-key"
          className="inputs"
          name="apiKey"
          onChange={this.handleChange}
        />
      </label>
      <br />
      <label>
        Your Api Secret
        <input
          id="api-secret"
          className="inputs"
          name="apiSecret"
          onChange={this.handleChange}
        />
      </label>
      <br />
      <Button type="submit">Get Coins</Button>
    </form>
    )
  }
};

export default SearchForm;
