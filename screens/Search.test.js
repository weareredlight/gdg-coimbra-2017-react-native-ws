import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { TextInput, FlatList } from 'react-native';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';
import Item from '../components/Item';

Enzyme.configure({ adapter: new Adapter() });

const updateQuery = jest.fn();
const search = jest.fn();

const props = searchResults => ({
  screenProps: {
    Search: {
      search,
      updateQuery,
      searchResults,
      query: 'GDG',
    },
  },
});

const results = [
 "https://pplware.sapo.pt/wp-content/uploads/2017/06/google_fotos.jpg",
 "https://pplware.sapo.pt/wp-content/uploads/2017/06/google_fotos.jpg",
];

const renderComponent = props => <Search {...props} />;

describe('search input', () => {
  const wrapper = shallow(renderComponent(props([])));
  const textInput = wrapper.find(TextInput).get(0);

  it('renders text input with correct information', () => {
    const placeholder = textInput.props.placeholder;
    const value = textInput.props.value;

    expect(placeholder).toBe('Search');
    expect(value).toBe('GDG');
  });

  it('calls prop updateQuery on text change', () => {
    wrapper.find(TextInput).simulate('changeText', 'text');
    expect(updateQuery).toBeCalledWith('text');
  });

  it('calls prop search on text submit', () => {
    wrapper.find(TextInput).simulate('submit', 'text');
    expect(search).toBeCalled();
  });
});

describe('search results', () => {
  const wrapper = shallow(renderComponent(props(results)));
  const list = wrapper.find(FlatList).get(0);

  it('receives all the items', () => {
    const data = list.props.data;
    expect(data).toBe(results);
  });
});

