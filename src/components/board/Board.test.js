import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';
import Square from '../square/Square';

describe('Board Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Board />));

  //snapshot testing
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div className="board"/>', () => {
    expect(wrapper.find('div.board').length).toEqual(1);
  });

  it('should render 3 <div className="board-row"/>', () => {
    expect(wrapper.find('div.board-row').length).toEqual(3);
  });



});