"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";
import CoinLogo from "./CoinLogo.js";
import ArrowUpSmall from "./svg/ArrowUpSmall.js";
import ArrowDownSmall from "./svg/ArrowDownSmall.js";
import * as theme from "../theme/theme.js";
import { VictoryArea } from "victory-native";

class ChartsItem extends Component {
  render() {
    const coins = {
      BTC: {
        name: "Bitcoin",
        color: "#F5B300"
      },
      ETH: {
        name: "Ehterium",
        color: "#8A92B2"
      },
      LTC: {
        name: "LiteCoin",
        color: "#585858"
      },
      XRP: {
        name: "Ripple",
        color: "#1276A7"
      },
      XMR: {
        name: "Monero",
        color: "#FF6B01"
      }
    };

    const arrow =
      this.props.trend == "up" ? <ArrowUpSmall /> : <ArrowDownSmall />;
    const percentageStyle =
      this.props.trend == "up" ? theme.upTextStyle : theme.downTextStyle;

    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <View style={styles.leftSide}>
            <Text style={theme.inputTextStyle}>
              {coins[this.props.coinType]["name"]}
            </Text>
            <CoinLogo coinIndexTitle={this.props.coinType} />
          </View>
          <View style={styles.rightSide}>
            <View style={styles.valueTop}>
              <Text style={{ ...theme.inputTextStyle }}>
                ${this.props.amountDollars}
              </Text>
            </View>
            <View style={styles.valueBottom}>
              <Text style={{ ...percentageStyle, marginRight: 5 }}>
                ({this.props.diffPercentage}%)
              </Text>
              <Text style={{ ...percentageStyle, marginRight: 3 }}>
                ${this.props.diffDollars}
              </Text>
              {arrow}
            </View>
          </View>
        </View>
        <View style={styles.chart}>
          <VictoryArea
            width={theme.windowWidth - theme.padding * 2}
            height={108}
            padding={0}
            style={{
              data: {
                fill: coins[this.props.coinType]["color"],
                strokeWidth: 2,
                fillOpacity: 0.1,
                stroke: coins[this.props.coinType]["color"]
              }
            }}
            data={this.props.chart}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 190,
    backgroundColor: theme.color.white,
    borderRadius: 6,
    marginTop: theme.padding
  },
  info: {
    padding: theme.padding,
    flexDirection: "row"
  },
  chart: {
    height: 90,
    justifyContent: "flex-start",
    alignItems: "flex-start"
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
  },
  valueBottom: {
    paddingTop: 5,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default ChartsItem;
