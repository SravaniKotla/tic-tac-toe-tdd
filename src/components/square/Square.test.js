import React from 'react';
import { shallow } from 'enzyme';
import Square from './Square';

describe('Square Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(
  <Square 
  onClick={jest.fn()}
  value={''}
  />
  ));

  //snapshot testing
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  
  it('should render a button', () => {
    expect(wrapper.find('button.square').length).toEqual(1);
  });

  it('should render the value of square', () => {
    wrapper.setProps({ value: 'test' });
    expect(wrapper.text()).toEqual('test');
  });

});