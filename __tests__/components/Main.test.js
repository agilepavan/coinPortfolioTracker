import React from 'react';
import Main from '../../app/components/Main.jsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { H3 } from '../../app/components/shared/Header.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Main file', () => {
  const wrapper = Enzyme.shallow(<Main />);
  test('should contain Header component', () => {
    expect(wrapper.find(H3).exists()).toBe(true);
  });

  test('should have header as Crypto Coin Portfolio on the Header component', () => {
    expect(wrapper.find(H3).props().children).toBe('Crypto Coin Portfolio');
  });
});
