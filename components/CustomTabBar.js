"use strict";

import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import * as theme from "../theme/theme.js";
import TabBarButton from "./TabBarButton.js";

class CustomTabBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabBarButton
          active={this.props.active == "wallets" ? true : false}
          title="Wallets"
          tabBarItemType="wallets"
        />
        <TabBarButton
          active={this.props.active == "charts" ? true : false}
          title="Charts"
          tabBarItemType="charts"
        />
        <TabBarButton
          active={this.props.active == "trading" ? true : false}
          title="Trading"
          tabBarItemType="trading"
        />
        <TabBarButton
          active={this.props.active == "alerts" ? true : false}
          title="Alerts"
          tabBarItemType="alerts"
        />
        <TabBarButton
          active={this.props.active == "settings" ? true : false}
          title="Settings"
          tabBarItemType="settings"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.white,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }
});

export default CustomTabBar;
