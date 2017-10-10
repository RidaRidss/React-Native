import React, { Component } from "react";
import {
  Button,
  Alert,
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import styles from "./style";
import ScarletScreen from "../../container/Home";
import { Actions } from "react-native-router-flux"; // New code

export default class Form extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
      >
        <TextInput
          style={[styles.input, styles.form]}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Email or Mobile Num"
          onSubmitEditing={event => {
            this.password.focus();
          }}
          ref={ref => {
            this.name = ref;
          }}
        />
        <TextInput
          style={styles.input}
          returnKeyType="go"
          placeholder="Password"
          ref={ref => {
            this.password = ref;
          }}
          secureTextEntry
        />
        <View style={styles.submit}>
          <Button onPress={() => Actions.Home()} title="Login" />
        </View>
        <View style={styles.submit}>
          <Button onPress={() => Actions.SignUp()} title="SignUp" />
        </View>
        <View style={{ height: 60 }} />
      </KeyboardAvoidingView>
    );
  }
}
