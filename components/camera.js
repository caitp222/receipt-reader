import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Button,
  Text,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import styles from '../styles/cameraStyle';

class CameraAccess extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.memory}>
          <Text style={styles.capture} >[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }
}

export default CameraAccess ;
