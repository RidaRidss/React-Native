/**
 * @flow
 */

import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import Login from "./container/Login";
import Home from "./container/Home";
import SignUp from "./container/SignUp";
import styles from "./styles";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            hideNavBar
            key="Login"
            style={styles.container}
            component={Login}
            title="Login"
            initial
          />
          <Scene
            swipeEnabled={false}
            key="Home"
            component={Home}
            title="Home"
          />
          <Scene
            swipeEnabled={false}
            key="SignUp"
            component={SignUp}
            title="SignUp"
          />
        </Scene>
      </Router>
    );
  }
}
