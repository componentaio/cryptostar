"use strict";

import React, { Component } from "react";

import { Platform, StyleSheet, View, Text } from "react-native";

import FormHeaderSection from "../components/FormHeaderSection.js";
import FormSection from "../components/FormSection.js";
import LinkingSection from "../components/LinkingSection.js";
import ButtonSection from "../components/ButtonSection.js";

import t from "tcomb-form-native";

const User = t.struct({
  email: t.String,
  password: t.String
});

const Form = t.form.Form;

const options = {
  fields: {
    email: {
      label: "EMAIL ID"
    },
    password: {
      label: "PASSWORD",
      password: true,
      secureTextEntry: true
    }
  }
};

class Signin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FormHeaderSection
          actionText="Login to your Account"
          taglineText="Welcome Back!"
        />
        <FormSection formType={User} formOptions={options} />
        <LinkingSection
          taglineText="Don’t have an account?"
          actionText="Signup now"
        />
        <ButtonSection title="Login" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Signin;
