"use strict";

import React, { Component } from "react";

import { Platform, StyleSheet, View, Text } from "react-native";

import FormHeaderSection from "../components/FormHeaderSection.js";
import FormSection from "../components/FormSection.js";
import LinkingSection from "../components/LinkingSection.js";
import ButtonSection from "../components/ButtonSection.js";

import t from "tcomb-form-native";

const User = t.struct({
  name: t.String,
  email: t.String,
  password: t.String,
  password_confirm: t.String
});

const options = {
  fields: {
    name: {
      label: "YOUR NAME"
    },
    email: {
      label: "EMAIL ID"
    },
    password: {
      label: "PASSWORD",
      password: true,
      secureTextEntry: true
    },
    password_confirm: {
      label: "PASSWORD CONFIRMATION",
      password: true,
      secureTextEntry: true
    }
  }
};

class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FormHeaderSection
          actionText="Create a New Account"
          taglineText="Sync across devices with your Account"
        />
        <FormSection formType={User} formOptions={options} />
        <LinkingSection taglineText="Already a user?" actionText="Login now" />
        <ButtonSection title="Create Account" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Signup;
