import React from 'react';
import { NavLink, IndexLink, Link } from 'react-router-dom';
import { H3 } from '../../app/components/shared/Header.jsx'
const Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="columns medium-8 large-8 small-centered">
          <H3>Crypto Coin Portfolio</H3>
          {props.children}
        </div>
      </div>
    </div>
  );
}
export default Main;
