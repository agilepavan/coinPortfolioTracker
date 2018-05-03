import React, { Component } from 'react';
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
   this.isValid();
   this.props.onChange(this.props.index, this.state.inputValue);
  }

  render() {
    return (
    <div>
      <label>
        <h6>{this.props.label}</h6>
      </label>
      <input
        type="text"
        value={this.state.inputValue}
      />
    </div>
  )
  }
}

Input.defaultProps = {
  label: '',
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Input;
