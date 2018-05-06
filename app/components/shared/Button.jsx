import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

const ButtonStyles = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;


const theme = {
  fg: 'palevioletred',
  bg: 'white'
};

const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});

const Button = (props) => {
  return <ButtonStyles theme={invertTheme}>{props.children}</ButtonStyles>
};

export default Button;
