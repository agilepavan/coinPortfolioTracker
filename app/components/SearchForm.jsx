import React, { Component } from 'react';
import Input from 'Input';

class SearchForm extends Component {
  onFormSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <Input
            label="Your Api Key"
            value=""
          />
          <Input
            label="Your Secret Value"
            value=""
          />
          <button className="button expanded hollow">Get Coin</button>
        </form>
      </div>
  )
  }
};

export default SearchForm;
