import React from 'react';
import { shallow , mount } from 'enzyme';
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
    let squares = Array(9).fill(null);
    expect(wrapper.containsMatchingElement(<Board squares={squares}/>
    )).toEqual(true);
  });

  it('calls onClick event on click of a board sqaure', () => {
    let squares = Array(9).fill(null);
    const onClick = jest.fn(); //mock function
    let wrapper = mount(<Board squares={squares} onClick={onClick} />);
    wrapper.find('button.square').first().simulate('click');
    expect(onClick).toBeCalledWith(0);
  });

  it('renders game status correctly', () => {
    wrapper = mount(<Game />);
    const firstPlayer = wrapper.find('div.game-info').children().first().text();
    expect(firstPlayer).toEqual('Player : X ');

    const button = wrapper.find('button.square').first();
    button.simulate('click');
    const secondPlayer = wrapper.find('div.game-info').children().first().text();
    expect(secondPlayer).toEqual('Player : O ');

    const turn2 = wrapper.find('button.square').at(1);
    turn2.simulate('click');
    const turn3 = wrapper.find('button.square').at(4);
    turn3.simulate('click');
    const turn4 = wrapper.find('button.square').at(5);
    turn4.simulate('click');
    const turn5 = wrapper.find('button.square').at(8);
    turn5.simulate('click');

    const winner = wrapper.find('div.game-info').children().first().text();
    expect(winner).toEqual('Winner : X');
});

});