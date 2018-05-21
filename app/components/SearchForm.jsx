import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';
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
    this.getBalance = this.getBalance.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  getBalance() {
    const getApiKey = this.state.apiKey;
    const getBalancesBittrex = `https://bittrex.com/api/v1.1/account/getbalances?apikey=${getApiKey}`;
    return axios.get(getBalancesBittrex,{
      method: 'GET',
      // mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Method': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Request-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
    })
    .then(function(res) {
      if (!res.data.success) {
        console.log(res);
        throw new Error(res.data.message);
      } else {
        return res.data.result;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getBalance();
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
