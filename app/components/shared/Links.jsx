import React from 'react';
import styled from 'styled-components';
import {NavLink, IndexLink, Link} from 'react-router-dom';

const List = styled.li`
  list-style: none;
  float: left;
  padding: 1rem;
  margin: 0 auto;
`;

const UnorderedList = styled.ul`
  background: black;
  height: 100px;
  margin: 0;
`;

const StyledNavLinks = styled(NavLink)`
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  color: black;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropBtn = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  a {
    color: black;
     padding: 12px 16px;
     text-decoration: none;
     display: block;
    &:hover {
      background-color: #ddd;
    }
  }
`;
class Links extends React.Component{

  componentDidMount() {
    $(document).foundation();
  }

  onSearch(e) {
      e.preventDefault();
      alert('Not wired up!')
  }
  render() {
    return (
      <div className="top-bar">
          <UnorderedList>
            <List>
              <StyledNavLinks
                exact
                to="/"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold'}}>
                Home
              </StyledNavLinks>
            </List>
            <List>
              <StyledNavLinks
                to="/about"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold'}}>
                About
              </StyledNavLinks>
            </List>
            <List>
              <ul class="dropdown menu" data-dropdown-menu>
                <li>
                  <a href="/apis">Apis</a>
                  <ul class="menu">
                    <li><a href="#">CoinBase</a></li>
                    <li><a href="#">KuCoin</a></li>
                    <li><a href="#">Bittrex</a></li>
                  </ul>
                </li>
              </ul>
            </List>
          </UnorderedList>
      </div>
    )
  }
};

export default Links;
