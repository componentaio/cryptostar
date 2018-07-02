"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import * as theme from "../theme/theme.js";
import Delete from "./svg/Delete.js";

class Keyboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity>
            <Text style={theme.keyboardTextStyle}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={theme.keyboardTextStyle}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={theme.keyboardTextStyle}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity>
            <Text style={theme.keyboardTextStyle}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={theme.keyboardTextStyle}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={theme.keyboardTextStyle}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity>
            <Text style={theme.keyboardTextStyle}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={theme.keyboardTextStyle}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={theme.keyboardTextStyle}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={{ width: 20 }} />
          <TouchableOpacity style={{ paddingLeft: 3 }}>
            <Text style={theme.keyboardTextStyle}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingTop: 7 }}>
            <Delete />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 240,
    marginTop: 40,
    marginBottom: 20
  },
  row: {
    flex: 1,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default Keyboard;
