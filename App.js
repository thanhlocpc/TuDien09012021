import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import Main from './src/component/main';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Main></Main>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});