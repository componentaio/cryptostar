"use strict";

import React, { Component } from "react";

import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import * as theme from "../theme/theme.js";

class BlackButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={theme.buttonTextStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: theme.windowWidth - 2 * theme.padding,
    height: 48,
    backgroundColor: theme.color.black,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }
});

export default BlackButton;
