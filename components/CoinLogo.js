"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";
import * as theme from "../theme/theme.js";
import Btc from "./svg/coins/Btc.js";
import Eth from "./svg/coins/Eth.js";
import Ltc from "./svg/coins/Ltc.js";
import Xmr from "./svg/coins/Xmr.js";
import Xrp from "./svg/coins/Xrp.js";

class CoinLogo extends Component {
  render() {
    let logo = <Btc />;
    switch (this.props.coinIndexTitle) {
      case "BTC": {
        logo = <Btc />;
        break;
      }
      case "ETH": {
        logo = <Eth />;
        break;
      }
      case "XMR": {
        logo = <Xmr />;
        break;
      }
      case "LTC": {
        logo = <Ltc />;
        break;
      }
      case "XRP": {
        logo = <Xrp />;
        break;
      }
    }

    return (
      <View style={styles.container}>
        {logo}
        <Text style={{ ...theme.coinIndexTextStyle, marginLeft: 6 }}>
          {this.props.coinIndexTitle}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

export default CoinLogo;
