import React, { Component } from "react";
import { ScrollView } from "react-native";
import styles from "./styles";
import Form from "../../components/Form";
import Logo from "../../components/Logo";

export default class Login extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Logo />
        <Form />
      </ScrollView>
    );
  }
}
