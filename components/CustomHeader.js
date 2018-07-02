"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as theme from "../theme/theme.js";
import Plus from "./svg/Plus.js";
import ArrowUp from "./svg/ArrowUp.js";

class CustomHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftSide}>
          <View>
            <Text style={theme.taglineTextStyle}>My Account</Text>
          </View>
          <View style={styles.accountInfo}>
            <Text style={theme.accountHeaderTextStyle}>$16,065.14</Text>
            <ArrowUp styles={{ marginBottom: 12, marginLeft: 10 }} />
            <Text
              style={{ ...theme.upTextStyle, marginLeft: 10, marginBottom: 10 }}
            >
              20%
            </Text>
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
    height: 171,
    padding: theme.padding + 5,
    alignItems: "flex-end",
    flexDirection: "row",
    shadowOpacity: 0.1,
    shadowRadius: 15,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0 }
  },
  leftSide: {
    justifyContent: "flex-start"
  },
  rightSide: {
    flex: 1,
    alignItems: "flex-end"
  },
  accountInfo: {
    flexDirection: "row",
    alignItems: "flex-end"
  }
});

export default CustomHeader;
