import React from 'react';
import { Image } from 'react-native';
// setup file
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from '../App';
import { Navigator } from '../navigation/Navigator';
import Splash from '../components/Util/Splash';
import utils from '../utils';

configure({ adapter: new Adapter() });

describe('Testing Splash component', () => {
  const wrapper = shallow(<Splash />);

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
