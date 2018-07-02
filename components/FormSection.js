"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Platform } from "react-native";
import * as theme from "../theme/theme.js";

import t from "tcomb-form-native";

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
      height: 30,
      marginVertical: 5,
      paddingHorizontal: 5,
      borderBottomColor: "#EFF0F4",
      borderBottomWidth: 1
    }
  }
};

class FormSection extends Component {
  render() {
    const options = {
      ...this.props.formOptions,
      stylesheet: formStyles
    };

    return (
      <View style={styles.container}>
        <Form type={this.props.formType} options={options} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingHorizontal: theme.padding
  }
});

export default FormSection;
