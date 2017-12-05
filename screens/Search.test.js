import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import { Text } from 'react-native';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';

Enzyme.configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';

const renderComponent = props => (
  <Search {...props} />
);

it('renders text info', () => {
  const wrapper = shallow(renderComponent());

  expect(wrapper.find(Text).get(0).props.children).toBe('Search Screen');
});

