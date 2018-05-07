import React from 'react';
import Input from '../../../app/components/shared/Input.jsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Input shared component file', () => {
  const wrapper = Enzyme.shallow(<Input />);

  test('should contain Input', () => {
    expect(wrapper.find('input').exists()).toBe(true);
  });

  test('should contain label', () => {
    expect(wrapper.find('label').exists()).toEqual(true);
  });

});
