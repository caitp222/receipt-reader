import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/form';
import CameraAccess from './components/camera'
import styles from './styles/appStyle';
import { NativeRouter, Route, Link } from 'react-router-native';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Form}/>
          <Route exact path="/camera" component={CameraAccess}/>
        </View>
      </NativeRouter>
    );
  }
}
