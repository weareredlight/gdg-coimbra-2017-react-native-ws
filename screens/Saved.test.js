import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import { TextInput, FlatList } from 'react-native';
import Adapter from 'enzyme-adapter-react-16';
import Saved from './Saved';
import Item from '../components/Item';

Enzyme.configure({ adapter: new Adapter() });

const renderComponent = props => (
  <Saved {...props} />
);

const props = saved => ({
  screenProps: {
    Saved: {
      saved,
    },
  },
});

const images = [
 "https://pplware.sapo.pt/wp-content/uploads/2017/06/google_fotos.jpg",
 "https://pplware.sapo.pt/wp-content/uploads/2017/06/google_fotos.jpg",
];

describe('saved images', () => {
  const wrapper = shallow(renderComponent(props(images)));
  const list = wrapper.find(FlatList).get(0);

  it('receives all the items', () => {
    const data = list.props.data;
    expect(data).toBe(images);
  });
});