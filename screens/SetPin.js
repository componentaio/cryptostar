"use strict";

import React, { Component } from "react";

import { Platform, StyleSheet, View, Text } from "react-native";

import FormHeaderSection from "../components/FormHeaderSection.js";
import FormSection from "../components/FormSection.js";
import LinkingSection from "../components/LinkingSection.js";
import ButtonSection from "../components/ButtonSection.js";
import PinKeybord from "../components/PinKeybord.js";

class SetPin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FormHeaderSection
          actionText="Create a Secured PIN"
          taglineText="Secure your portfolio with a PIN"
        />
        <PinKeybord />
        <ButtonSection title="Create Pin" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SetPin;
