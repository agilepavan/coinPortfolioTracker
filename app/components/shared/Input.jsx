import React, { Component } from 'react';
import styled from 'styled-components';
import Foundation from 'react-foundation';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
  super(props);
  this.state = {
    inputValue: this.props.value,
    // valid: true,
  };

  this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      inputValue: nextProps.value,
    });
  }

  onChange() {
   this.props.onChange(this.state.inputValue);
  }

  render() {
    return (
    <div>
      <label>
        {this.props.label}
      </label>
      <br />
      <input
        className="inputs"
        type="text"
        ref={this.props.reference}
        onChange={this.onChangeInput}
      />
    </div>
  )
  }
}

Input.defaultProps = {
  label: '',
  reference: '',
};

Input.propTypes = {
  label: PropTypes.string,
  reference: PropTypes.string.isRequired,
};

export default Input;
