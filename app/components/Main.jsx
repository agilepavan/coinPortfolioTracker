import React from 'react';
import {NavLink, IndexLink, Link} from 'react-router-dom';
import '../../src/styles/scss/components/Main.scss';

const Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="columns medium-8 large-8 small-centered">
          <h3 id="header">Crypto Coin Portfolio</h3>
            {props.children}
        </div>
      </div>
    </div>
  );
}
export default Main;
