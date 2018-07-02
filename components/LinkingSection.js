"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";
import * as theme from "../theme/theme.js";

class LinkingSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={theme.taglineTextStyle}>{this.props.taglineText}</Text>
        <Text style={theme.linkTextStyle}>{this.props.actionText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LinkingSection;
