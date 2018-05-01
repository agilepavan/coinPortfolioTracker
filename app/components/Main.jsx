import React from 'react';
import {NavLink, IndexLink, Link} from 'react-router-dom';

const Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="columns medium-8 large-8 small-centered">
          <h2 id="header">Crypto Coin Portfolio</h2>
          {props.children}
        </div>
      </div>
    </div>
  );
}
export default Main;
