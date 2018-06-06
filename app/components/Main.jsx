import React from 'react';
import { NavLink, IndexLink, Link } from 'react-router-dom';
import Nav from '../../app/components/shared/Nav';
import { H3 } from '../../app/components/shared/Header.jsx';

// Load foundation
require ('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');
require('script-loader!jquery/dist/jquery.min.js');
require('script-loader!foundation-sites/dist/js/foundation.min.js');
$(document).foundation();

const Main = (props) => {
  return (
    <div>
      <Nav />
      <br/>
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
