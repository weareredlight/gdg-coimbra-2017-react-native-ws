import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Search from './screens/Search';
import Saved from './screens/Saved';
import search from './api';

export const Navigator = TabNavigator(
  {
    Search: { screen: Search, navigationOptions: { tabBarLabel: 'SEARCH' } },
    Saved: { screen: Saved, navigationOptions: { tabBarLabel: 'SAVED' } },
  },
  {
    animationEnabled: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#212121',
      inactiveTintColor: '#d3d3d3',
      showIcon: false,
      upperCaseLabel: true,
      indicatorStyle: {
        height: 0,
      },
      tabStyle: {
        borderBottomWidth: 0,
      },
      labelStyle: {
        marginBottom: 15,
        fontWeight: 'bold',
        fontSize: 18,
      },
      style: {
        backgroundColor: 'white',
      },
    },
  },
);

export default class App extends React.Component {
  state = { searchResults: [], saved: [], q: '' };

  search = async () => {
    const response = await search(this.state.q);
    const body = await response.json();
    const searchResults = body.data.map(ele => ele.images.downsized.url); 

    this.setState({ searchResults });
  };

  updateQuery = text => this.setState({ q: text });
  deleteGif = gif => this.setState(({ saved }) => ({ saved: saved.filter(ele => ele !== gif) }));
  saveGif = gif => this.state.saved.every(ele => ele !== gif) &&
    this.setState(({ saved }) => ({ saved: [...saved, gif] }));

  render() {
    return (
      <Navigator
        screenProps={{
          Search: {
            search: this.search,
            updateQuery: this.updateQuery,
            searchResults: this.state.searchResults,
            query: this.state.q,
            onPress: this.saveGif,
          },
          Saved: {
            saved: this.state.saved,
            onPress: this.deleteGif,
          },
        }}
      />
    );
  }
}
