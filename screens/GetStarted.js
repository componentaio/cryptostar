"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

import * as theme from "../theme/theme.js";
import BlackButton from "../components/BlackButton.js";
import Logo from "../components/svg/Logo.js";
import Bg from "../components/svg/Bg.js";

class GetStarted extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Logo />
        </View>
        <View style={styles.middle}>
          <Bg />
        </View>
        <View style={styles.bottom}>
          <Text style={theme.taglineTextStyle}>
            Store. Watch & Trade Crypto Currencies
          </Text>
        </View>
        <View style={styles.button}>
          <BlackButton title="Get Started" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.white
  },
  top: {
    height: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: 50
  },
  middle: {
    height: 400
  },
  bottom: {
    flex: 1,
    marginTop: 35,
    alignItems: "center"
  },
  button: {
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    resizeMode: "contain",
    width: theme.windowWidth / 2
  },
  imageBg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GetStarted;
