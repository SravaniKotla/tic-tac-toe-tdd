import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';

describe('Board Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Board
        onClick={jest.fn()}
        value={[]}
      />
    );
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render 4 div elements', () => {
    expect(wrapper.find('div').length).toEqual(4);
  });

  it('should render an instance of the Square component for each index of value', () => {
    const value = Array(9).fill(null);
    const totalSquares = value.length;
    wrapper.setProps({ value });
    expect(wrapper.find('Square').length).toEqual(totalSquares);
  });
});
