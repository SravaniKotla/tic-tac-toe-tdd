import React from 'react';
import { shallow } from 'enzyme';
import Square from './Square';

describe('Square Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Square />));

  //snapshot testing
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  
  it('should render a button', () => {
    expect(wrapper.find('button.square').length).toEqual(1);
  });

});