"use strict";

import React, { Component } from "react";

import { StyleSheet, View, FlatList } from "react-native";

import CustomTabBar from "../components/CustomTabBar.js";
import CustomHeader from "../components/CustomHeader.js";
import WalletsItem from "../components/WalletsItem.js";
import * as theme from "../theme/theme.js";

const listData = [
  {
    key: "1",
    coinType: "BTC",
    amountDollars: "5,291.20",
    amountCoins: "0.592",
    trend: "up",
    trendPercentage: "20"
  },
  {
    key: "2",
    coinType: "ETH",
    amountDollars: "2,213.04",
    amountCoins: "2.624",
    trend: "up",
    trendPercentage: "5"
  },
  {
    key: "3",
    coinType: "XRP",
    amountDollars: "4,831.69",
    amountCoins: "2.624",
    trend: "down",
    trendPercentage: "5"
  },
  {
    key: "4",
    coinType: "LTC",
    amountDollars: "2,2529.21",
    amountCoins: "0.592",
    trend: "down",
    trendPercentage: "19"
  },
  {
    key: "5",
    coinType: "XMR",
    amountDollars: "1,200.00",
    amountCoins: "9.592",
    trend: "up",
    trendPercentage: "20"
  }
];

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomHeader />
        <FlatList
          style={styles.list}
          data={listData}
          renderItem={({ item }) => (
            <WalletsItem
              coinType={item.coinType}
              amountDollars={item.amountDollars}
              amountCoins={item.amountCoins}
              trend={item.trend}
              trendPercentage={item.trendPercentage}
            />
          )}
        />
        <CustomTabBar active="wallets" />
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
