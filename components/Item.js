import React from 'react';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress';

export default class Item extends React.Component {
  render() {
    const { uri, height, width } = this.props;

    return (
      <Image
        source={{ uri }}
        indicator={ProgressBar}
        style={{ height, width }}
      />
    );
  }
}
