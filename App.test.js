import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Navigator from './Navigator';
import Saved from './screens/Saved';

Enzyme.configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders main navigator', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(Navigator).length).toBe(1);
});
