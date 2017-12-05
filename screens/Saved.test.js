import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import { Text } from 'react-native';
import Adapter from 'enzyme-adapter-react-16';
import Saved from './Saved';

Enzyme.configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';

const renderComponent = props => (
  <Saved {...props} />
);

it('renders text info', () => {
  const wrapper = shallow(renderComponent());

  expect(wrapper.find(Text).get(0).props.children).toBe('Saved Screen');
});

