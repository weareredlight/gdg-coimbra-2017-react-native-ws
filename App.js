import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Search from './screens/Search';
import Saved from './screens/Saved';
import search from './api';
import Navigator from './Navigator';
import Toast, { DURATION } from 'react-native-easy-toast';

export default class App extends React.Component {
  state = { searchResults: [], saved: [], q: '' };

  search = async () => {
    const response = await search(this.state.q);
    const body = await response.json();
    const searchResults = body.data.map(ele => ele.images.downsized.url);

    this.setState({ searchResults });
  };

  saveFeedback = () => this.refs.toast.show('GIF saved!');
  deleteFeedback = () => this.refs.toast.show('GIF deleted!');
  updateQuery = text => this.setState({ q: text });
  deleteGif = gif =>
    this.setState(
      ({ saved }) => ({ saved: saved.filter(ele => ele !== gif) }),
      this.deleteFeedback,
    );
  saveGif = gif =>
    this.state.saved.every(ele => ele !== gif) &&
    this.setState(
      ({ saved }) => ({ saved: [...saved, gif] }),
      this.saveFeedback,
    );

  render() {
    return (
      <View style={StyleSheet.absoluteFill}>
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
        <Toast ref="toast" />
      </View>
    );
  }
}
