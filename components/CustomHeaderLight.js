"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as theme from "../theme/theme.js";
import Plus from "./svg/Plus.js";

class CustomHeaderLight extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftSide}>
          <View>
            <Text style={theme.inputTextStyle}>{this.props.title}</Text>
          </View>
        </View>
        <View style={styles.rightSide}>
          <TouchableOpacity>
            <Plus />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 125,
    padding: theme.padding + 5,
    alignItems: "flex-end",
    flexDirection: "row"
  },
  leftSide: {
    justifyContent: "flex-start"
  },
  rightSide: {
    flex: 1,
    alignItems: "flex-end"
  }
});

export default CustomHeaderLight;
