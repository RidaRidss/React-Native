import React, { Component } from "react";
import { Image, View } from "react-native";
import styles from "./styles";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.stretch}
          source={require("../../images/logo.png")}
        />
      </View>
    );
  }
}
