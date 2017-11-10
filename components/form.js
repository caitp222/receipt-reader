import React, {Component} from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { TextInput,
  StyleSheet,
  TouchableHighlight,
  View,
  Button,
  Text,
  AsyncStorage
} from 'react-native';
import styles from '../styles/formStyle'

class Form extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight style={styles.scanButton}>
          <Text style={styles.scanText}>Scan Receipt</Text>
        </TouchableHighlight>
        <Text style={styles.label}>Vendor</Text>
        <TextInput style={styles.input} name="vendor" />
        <Text style={styles.label}>Description</Text>
        <TextInput name="description" style={styles.input}/>
        <Text style={styles.label}>Amount</Text>
        <TextInput name="amount" style={styles.input}/>
        <TouchableHighlight>
          <Text style={styles.confirm}>Confirm Expense</Text>
        </TouchableHighlight>
      </View>
        )
      }
    }

export default Form;
