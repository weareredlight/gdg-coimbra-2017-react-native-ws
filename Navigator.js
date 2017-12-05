import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Search from './screens/Search';
import Saved from './screens/Saved';

const Navigator = TabNavigator(
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

export default Navigator;
