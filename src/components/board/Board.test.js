import React from 'react';
import { shallow , mount } from 'enzyme';
import Board from './Board';
import Square from '../square/Square';

describe('Board Component', () => {
  let wrapper;
  let squares = Array(9).fill(null);
  beforeEach(() => wrapper = shallow(<Board squares={squares} />));

  //snapshot testing
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('calls onClick event on click of a board sqaure', () => {
        let squares = Array(9).fill(null);
        const onClick = jest.fn();
        let wrapper = mount(<Board squares={squares} onClick={onClick} />);
        wrapper.find('button.square').first().simulate('click');
        expect(onClick).toBeCalledWith(0);
    });



});