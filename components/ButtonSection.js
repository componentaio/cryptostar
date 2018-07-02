"use strict";

import React, { Component } from "react";

import { StyleSheet, View } from "react-native";

import BlackButton from "./BlackButton.js";
import * as theme from "../theme/theme.js";

class ButtonSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BlackButton title={this.props.title} color={theme.color.black} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

export default ButtonSection;
