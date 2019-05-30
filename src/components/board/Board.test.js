import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';
import Square from '../square/Square';

describe('Board Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Board />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Square Component', () => {
    expect(wrapper.find('square').length).toEqual(9);
  });

});