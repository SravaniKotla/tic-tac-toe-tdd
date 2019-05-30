import React from 'react';
import { shallow } from 'enzyme';
import Game from './Game';
import Board from '../board/Board';

describe('Game Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Game />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Board Component', () => {
    expect(wrapper.containsMatchingElement(<Board />)).toEqual(true);
  });

});