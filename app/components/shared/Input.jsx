// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
//
// class Input extends Component {
//   constructor(props) {
//   super(props);
//   this.state = {
//     inputValue: this.props.value,
//     // valid: true,
//   };

  // this.onChangeInput = this.onChangeInput.bind(this);
  // this.isValid = this.isValid.bind(this);
  // }

  // componentWillMount() {
  //  this.isValid();
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     inputValue: nextProps.value,
  //   });
  // }
  //
  // onChange() {
  //  this.isValid();
  //  this.props.onChange(this.props.index, this.state.inputValue);
  // }

//   render() {
//     return (
//     <div>
//       <input
//         value={this.state.inputValue}
//       />
//     </div>
//   )
//   }
// }

//   render() {
//     return (
//       <input
//         value={this.state.inputValue}
//       />
//     );
//   }
// }
//
// Input.propTypes = {
//   value: PropTypes.string.isRequired,
// };
//
// export default Input;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.value,
      valid: true,
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

  onChangeInput(event) {
    this.setState({
      inputValue: event.target.value,
    }, () => {
      this.onChange();
    });
  }

  isValid() {
    let valid = true;

    this.props.validationRules.forEach((s) => {
      if (!s(this.state.inputValue)) {
        valid = false;
      }
    });
    this.props.isValid(this.props.id, valid);
    this.setState({
      valid,
    });
  }

  render() {
    return (
      <input
        value={this.state.inputValue}
      />
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Input;
