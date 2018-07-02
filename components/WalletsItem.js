"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";
import CoinLogo from "./CoinLogo.js";
import ArrowUpSmall from "./svg/ArrowUpSmall.js";
import ArrowDownSmall from "./svg/ArrowDownSmall.js";
import * as theme from "../theme/theme.js";

class WalletsItem extends Component {
  render() {
    const coins = {
      BTC: "Bitcoin",
      ETH: "Ehterium",
      LTC: "LiteCoin",
      XRP: "Ripple",
      XMR: "Monero"
    };

    const arrow =
      this.props.trend == "up" ? <ArrowUpSmall /> : <ArrowDownSmall />;
    const percentageStyle =
      this.props.trend == "up" ? theme.upTextStyle : theme.downTextStyle;

    return (
      <View style={styles.container}>
        <View style={styles.leftSide}>
          <Text style={theme.inputTextStyle}>{coins[this.props.coinType]}</Text>
          <CoinLogo coinIndexTitle={this.props.coinType} />
        </View>
        <View style={styles.rightSide}>
          <View style={styles.valueTop}>
            <Text style={{ ...percentageStyle, marginRight: 3 }}>
              {this.props.trendPercentage}%
            </Text>
            {arrow}
            <Text style={{ ...theme.inputTextStyle, marginLeft: 10 }}>
              ${this.props.amountDollars}
            </Text>
          </View>
          <View style={styles.valueBottom}>
            <Text style={{ ...theme.coinIndexTextStyle, marginTop: 10 }}>
              {this.props.amountCoins} {this.props.coinType}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: theme.color.white,
    borderRadius: 6,
    marginTop: theme.padding,
    padding: theme.padding,
    flexDirection: "row"
  },
  leftSide: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  rightSide: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  valueTop: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default WalletsItem;
