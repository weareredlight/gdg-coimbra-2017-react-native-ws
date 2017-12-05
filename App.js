import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Search from './screens/Search';
import Saved from './screens/Saved';
import search from './api';
import Navigator from './Navigator';

export default class App extends React.Component {
  state = { searchResults: [], q: '' };

  search = async () => {
    const response = await search(this.state.q);
    const body = await response.json();
    const searchResults = body.data.map(ele => ele.images.downsized.url); 

    this.setState({ searchResults });
  };

  updateQuery = text => this.setState({ q: text });

  render() {
    return (
      <Navigator
        screenProps={{
          Search: {
            search: this.search,
            updateQuery: this.updateQuery,
            searchResults: this.state.searchResults,
            query: this.state.q,
          },
        }}
      />
    );
  }
}
