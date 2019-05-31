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

  it('should render 9 square components', () => {
    expect(wrapper.find('Square').length).toEqual(9);
  });

});

describe("Board Component props", () => {
  
  it('calls onClick event on click of a board sqaure', () => {
    let squares = Array(9).fill(null);
    const onClick = jest.fn();
    let wrapper = mount(<Board squares={squares} onClick={onClick} />);
    wrapper.find('button.square').first().simulate('click');
    expect(onClick).toBeCalledWith(0);
});

});