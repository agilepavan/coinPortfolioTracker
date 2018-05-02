import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
  super(props);
  this.state = {
    inputValue: this.props.value,
    // valid: true,
  };

  this.onChangeInput = this.onChangeInput.bind(this);
  this.isValid = this.isValid.bind(this);
  }

  componentWillMount() {
   this.isValid();
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
      <input
        value={this.state.inputValue}
      />
    </div>
  )
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Input;
