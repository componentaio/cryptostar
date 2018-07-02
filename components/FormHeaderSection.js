"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";

import * as theme from "../theme/theme.js";
import ArrowLeft from "./svg/ArrowLeft.js";

class FromHeaderSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topLine}>
          <View style={styles.sideCell}>
            <ArrowLeft />
          </View>
          <View style={styles.actionText}>
            <Text style={theme.headerTextStyle}>{this.props.actionText}</Text>
          </View>
          <View style={styles.sideCell} />
        </View>
        <View style={styles.bottomLine}>
          <Text style={theme.taglineTextStyle}>{this.props.taglineText}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 210,
    justifyContent: "center",
    alignItems: "center"
  },
  topLine: {
    height: 22,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  bottomLine: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  sideCell: {
    alignItems: "center",
    justifyContent: "center",
    width: theme.windowWidth / 5
  },
  actionText: {
    flex: 1,
    alignItems: "center"
  }
});

export default FromHeaderSection;
