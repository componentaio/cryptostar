"use strict";

import React, { Component } from "react";
import * as theme from "../theme/theme.js";

import { StyleSheet, View, Platform } from "react-native";

import Keyboard from "./Keyboard.js";
import t from "tcomb-form-native";

const Pin = t.struct({
  code: t.String
});

const Form = t.form.Form;

const formStyles = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      ...theme.formLabelTextStyle,
      marginTop: 25
    }
  },
  textbox: {
    normal: {
      height: 48,
      borderRadius: 10,
      borderWidth: 0,
      backgroundColor: theme.color.greyBg,
      paddingHorizontal: 15
    }
  }
};

class PinKeybord extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Form
          type={Pin}
          options={{
            auto: "none",
            stylesheet: formStyles,
            fields: {
              code: {
                password: true,
                secureTextEntry: true
              }
            }
          }}
        />
        <Keyboard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: theme.padding
  }
});

export default PinKeybord;
