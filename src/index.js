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
      // <Scene
      // tabs
      // lazy
      // initial
      // showIcon
      // key="home"
      // showLabel={false}
      // swipeEnabled={false}
      // tabBarPosition="bottom"
      // type={ActionConst.RESET}
      // animationEnabled={false}
      // iconStyle={styles.iconStyle}
      // tabBarStyle={styles.tabBarStyle}
      // indicatorStyle={styles.indicatorStyle}
      // >
      // <Scene
      // key="root"
      // hideNavBar
      // backTitle=" "
      // headerTintColor={Colors.text.secondary}
      // titleStyle={styles.title}
      // headerStyle={styles.header}
      // >
      // <Scene
      // initial
      // key="dashboard"
      // component={Groov}
      // onRight={() => Actions.search()}
      // rightButtonImage={Images.search}
      // rightButtonStyle={styles.rightButton}
      // navigationBarTitleImage={Images.groovLogo}
      // navigationBarTitleImageStyle={styles.groov}
      // />
    );
  }
}
