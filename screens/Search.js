import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TextInput,
} from 'react-native';
import Item from '../components/Item';

const { width, height } = Dimensions.get('window');

export default class Search extends React.Component {
  componentWillMount() {
    this.props.screenProps.Search.search();
  }

  renderItem = ({ item }) => (
    <Item
      uri={item}
      width={width}
      height={100}
      onPress={() => this.props.screenProps.Search.onPress(item)}
    />
  );

  render() {
    const {
      query,
      updateQuery,
      search,
      searchResults,
    } = this.props.screenProps.Search;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            value={query}
            onChangeText={updateQuery}
            placeholder="Search"
            onSubmitEditing={search}
            style={styles.txtInput}
            placeholderTextColor="#d3d3d3"
          />
          <FlatList
            data={searchResults}
            renderItem={this.renderItem}
            keyExtractor={a => a}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
  },
  header: {
    marginHorizontal: 12,
    width: '100%',
    marginTop: 22,
  },
  txtInput: {
    marginLeft: 12,
    paddingBottom: 12,
    width: '100%',
    backgroundColor: '#212121',
    color: 'white',
  },
});
