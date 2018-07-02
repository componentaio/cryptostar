"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";

import {
  color,
  windowWidth,
  taglineTextStyle,
  actionTextStyle
} from "../theme/theme.js";
import ArrowLeft from "./svg/ArrowLeft.js";

class HeadingTitle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topLine}>
          <View style={styles.backArrow}>
            <ArrowLeft />
          </View>
          <View style={styles.actionText}>
            <Text style={actionTextStyle}>{this.props.actionText}</Text>
          </View>
        </View>
        <View style={styles.bottomLine}>
          <Text style={taglineTextStyle}>{this.props.taglineText}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 55
  },
  topLine: {
    height: 35,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  bottomLine: {
    height: 35,
    flexDirection: "row",
    justifyContent: "center"
  },
  backArrow: {
    width: windowWidth / 4
  },
  actionText: {
    width: windowWidth / 2,
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default HeadingTitle;
