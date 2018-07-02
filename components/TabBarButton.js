"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as theme from "../theme/theme.js";

import Wallets from "./svg/tabBar/Wallets.js";
import Alerts from "./svg/tabBar/Alerts.js";
import Settings from "./svg/tabBar/Settings.js";
import Charts from "./svg/tabBar/Charts.js";
import Trading from "./svg/tabBar/Trading.js";

class TabBarButton extends Component {
  render() {
    const textStyle = this.props.active
      ? theme.tabBarActiveTextStyle
      : theme.tabBarInactiveTextStyle;

    let icon = <Wallets active={this.props.active} />;

    switch (this.props.title) {
      case "Wallets": {
        icon = <Wallets active={this.props.active} />;
        break;
      }
      case "Charts": {
        icon = <Charts active={this.props.active} />;
        break;
      }
      case "Trading": {
        icon = <Trading active={this.props.active} />;
        break;
      }
      case "Alerts": {
        icon = <Alerts active={this.props.active} />;
        break;
      }
      case "Settings": {
        icon = <Settings active={this.props.active} />;
        break;
      }
    }

    return (
      <TouchableOpacity style={styles.container}>
        {icon}
        <Text style={{ ...textStyle, marginTop: 7 }}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default TabBarButton;
