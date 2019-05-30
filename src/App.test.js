import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Game from './components/game/Game';

describe('App Component',() => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />)); //executes before each test case
    //snapshot testing
    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render the Game Component', () => {
        expect(wrapper.containsMatchingElement(<Game />)).toEqual(true);
      });
});