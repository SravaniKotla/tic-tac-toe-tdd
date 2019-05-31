import React from 'react';
import { shallow } from 'enzyme';
import Game from './Game';
import Board from '../board/Board';

describe('Game Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Game />));

  //snapshot testing
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render 4 div components ', () => {
    expect(wrapper.find('div.game').length).toEqual(1);
    expect(wrapper.find('div.game-board').length).toEqual(1);
    expect(wrapper.find('div.game-info').length).toEqual(1);
    expect(wrapper.find('div.status').length).toEqual(1);
  });

  it('should render ul component ', () => {
    expect(wrapper.find('ul.moves').length).toEqual(1);
  });

  it('should render the Board Component', () => {
    expect(wrapper.containsMatchingElement(
    <Board
      />
    )).toEqual(true);

  });

});