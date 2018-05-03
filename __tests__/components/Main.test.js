import React from 'react';
import Main from '../../app/components/Main.jsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Main file', () => {
  const wrapper = Enzyme.shallow(<Main />);
  test('should contain h tag', () => {
    expect(wrapper.find('h2').exists()).toBe(true);
  });

  test('should contain h3 with id', () => {
    expect(wrapper.find('#header').exists()).toBe(true);
  });

  test('should have header as Crypto Coin Portfolio', () => {
    expect(wrapper.find('h3').props().children).toBe('Crypto Coin Portfolio');
  });
});
