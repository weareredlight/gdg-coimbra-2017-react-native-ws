import React from 'react';
import { TouchableOpacity } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress';

export default class Item extends React.Component {
  render() {
    const { uri, height, width, onPress } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
      <Image
        source={{ uri }}
        indicator={ProgressBar}
        style={{ height, width }}
      />
      </TouchableOpacity>
    );
  }
}
