"use strict";

import React, { Component } from "react";

import { StyleSheet, View, FlatList } from "react-native";

import CustomTabBar from "../components/CustomTabBar.js";
import CustomHeaderLight from "../components/CustomHeaderLight.js";
import ChartsItem from "../components/ChartsItem.js";
import * as theme from "../theme/theme.js";

const listData = [
  {
    key: "1",
    coinType: "BTC",
    diffDollars: "722.53",
    diffPercentage: "0.3",
    amountDollars: "689.42",
    trend: "up",
    chart: [
      { x: 1, y: 12 },
      { x: 2, y: 32 },
      { x: 3, y: 33 },
      { x: 4, y: 31 },
      { x: 5, y: 34 },
      { x: 6, y: 54 },
      { x: 7, y: 61 },
      { x: 8, y: 72 },
      { x: 9, y: 63 },
      { x: 10, y: 61 },
      { x: 11, y: 63 },
      { x: 12, y: 14 },
      { x: 13, y: 21 },
      { x: 14, y: 12 },
      { x: 15, y: 23 },
      { x: 16, y: 11 },
      { x: 17, y: 23 },
      { x: 18, y: 24 },
      { x: 19, y: 22 }
    ]
  },
  {
    key: "2",
    coinType: "ETH",
    diffDollars: "2872.53",
    diffPercentage: "0.3",
    amountDollars: "689.42",
    trend: "up",
    chart: [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 3 },
      { x: 5, y: 2 },
      { x: 6, y: 12 },
      { x: 7, y: 11 },
      { x: 8, y: 22 },
      { x: 9, y: 32 },
      { x: 10, y: 21 },
      { x: 11, y: 23 },
      { x: 12, y: 44 },
      { x: 13, y: 18 },
      { x: 14, y: 82 },
      { x: 15, y: 93 },
      { x: 16, y: 41 },
      { x: 17, y: 43 },
      { x: 18, y: 44 },
      { x: 19, y: 42 }
    ]
  },
  {
    key: "3",
    coinType: "XRP",
    diffDollars: "2232.53",
    diffPercentage: "0.3",
    amountDollars: "689.42",
    trend: "down",
    chart: [
      { x: 1, y: 10 },
      { x: 2, y: 12 },
      { x: 3, y: 12 },
      { x: 4, y: 11 },
      { x: 5, y: 13 },
      { x: 6, y: 14 },
      { x: 7, y: 21 },
      { x: 8, y: 22 },
      { x: 9, y: 23 },
      { x: 10, y: 41 },
      { x: 11, y: 53 },
      { x: 12, y: 64 },
      { x: 13, y: 71 },
      { x: 14, y: 52 },
      { x: 15, y: 33 },
      { x: 16, y: 31 },
      { x: 17, y: 33 },
      { x: 18, y: 34 },
      { x: 19, y: 32 }
    ]
  },
  {
    key: "4",
    coinType: "XMR",
    diffDollars: "4292.53",
    diffPercentage: "0.3",
    amountDollars: "689.42",
    trend: "up",
    chart: [
      { x: 1, y: 33 },
      { x: 2, y: 33 },
      { x: 3, y: 32 },
      { x: 4, y: 21 },
      { x: 5, y: 19 },
      { x: 6, y: 12 },
      { x: 7, y: 11 },
      { x: 8, y: 9 },
      { x: 9, y: 3 },
      { x: 10, y: 7 },
      { x: 11, y: 22 },
      { x: 12, y: 4 },
      { x: 13, y: 1 },
      { x: 14, y: 12 },
      { x: 15, y: 3 },
      { x: 16, y: 23 },
      { x: 17, y: 34 },
      { x: 18, y: 34 },
      { x: 19, y: 35 }
    ]
  },
  {
    key: "5",
    coinType: "LTC",
    diffDollars: "2200s.53",
    diffPercentage: "0.3",
    amountDollars: "689.42",
    trend: "down",
    chart: [
      { x: 1, y: 10 },
      { x: 2, y: 12 },
      { x: 3, y: 15 },
      { x: 4, y: 4 },
      { x: 5, y: 5 },
      { x: 6, y: 6 },
      { x: 7, y: 7 },
      { x: 8, y: 8 },
      { x: 9, y: 35 },
      { x: 10, y: 56 },
      { x: 11, y: 55 },
      { x: 12, y: 54 },
      { x: 13, y: 23 },
      { x: 14, y: 22 },
      { x: 15, y: 21 },
      { x: 16, y: 22 },
      { x: 17, y: 22 },
      { x: 18, y: 23 },
      { x: 19, y: 22 }
    ]
  }
];

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomHeaderLight title={"Charts"} />
        <FlatList
          style={styles.list}
          data={listData}
          renderItem={({ item }) => (
            <ChartsItem
              coinType={item.coinType}
              diffDollars={item.diffDollars}
              amountDollars={item.amountDollars}
              trend={item.trend}
              diffPercentage={item.diffPercentage}
              chart={item.chart}
            />
          )}
        />
        <CustomTabBar active="charts" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1,
    paddingHorizontal: theme.padding,
    backgroundColor: theme.color.greyBg2
  }
});

export default Home;
