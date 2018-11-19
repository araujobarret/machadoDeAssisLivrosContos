import React from 'react';
// setup file
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from '../App';
import { Navigator } from '../navigation/Navigator';
import Splash from '../components/Util/Splash';
import utils from '../utils';

configure({ adapter: new Adapter() });

describe('Testing App component', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Splash component as a child component', () => {
    expect(wrapper.find('Splash').exists()).toBe(true);
  });

  it('should render Navigator component after isLoading is assigned to false', () => {
    wrapper.setState({ isLoading: false});
    expect(wrapper.contains(<Navigator/>)).toBe(true);
  });
});
