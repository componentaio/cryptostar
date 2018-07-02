"use strict";

import React, { Component } from "react";

import { StyleSheet, View, ScrollView, Text } from "react-native";

import CustomTabBar from "../components/CustomTabBar.js";
import CustomHeaderLight from "../components/CustomHeaderLight.js";
import BlueButton from "../components/BlueButton.js";
import BlueArrowDown from "../components/svg/BlueArrowDown.js";
import * as theme from "../theme/theme.js";
import t from "tcomb-form-native";

const Exchange = t.struct({
  bitcoinAddress: t.String,
  btc: t.String
});

const Form = t.form.Form;

const formStyles = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      ...theme.formLabelTextStyle,
      marginTop: 25
    }
  },
  textbox: {
    normal: {
      height: 30,
      marginVertical: 5,
      paddingHorizontal: 5,
      borderBottomColor: "#EFF0F4",
      borderBottomWidth: 1
    }
  }
};

const options = {
  fields: {
    bitcoinAddress: {
      label: "BITCOIN ADDRESS"
    },
    btc: {
      label: "BTC"
    }
  },
  stylesheet: formStyles
};

class Trades extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomHeaderLight title="Trade Crypto" />
        <ScrollView style={styles.list}>
          <View style={styles.walletsSection}>
            <View style={styles.walletLeftSide}>
              <Text style={theme.taglineTextStyle}>Select Wallet</Text>
            </View>
            <View style={styles.walletRightSide}>
              <View style={styles.walletAmount}>
                <Text style={theme.inputBlueTextStyle}>Bitcoin</Text>
                <Text style={{ ...theme.inputTextStyle, marginTop: 5 }}>
                  $1,214.02
                </Text>
              </View>
              <View style={{ padding: 10 }}>
                <BlueArrowDown />
              </View>
            </View>
          </View>
          <View style={styles.formSection}>
            <View style={styles.menu}>
              <Text style={{ ...theme.regularBlueStyle, marginRight: 20 }}>
                Send
              </Text>
              <Text style={{ ...theme.regularGreyStyle, marginRight: 20 }}>
                Exchange
              </Text>
            </View>
            <View style={styles.formFields}>
              <Form type={Exchange} options={options} />
            </View>
            <View style={styles.estimation}>
              <Text style={theme.coinIndexTextStyle}>Estimated BTC Fee:</Text>
              <View style={styles.estimationValue}>
                <Text style={{ ...theme.taglineTextStyle, marginRight: 5 }}>
                  0.00024 BTC
                </Text>
                <Text
                  style={{
                    ...theme.inactiveTaglineTextStyle,
                    marginRight: 5,
                    marginTop: 20
                  }}
                >
                  ($92.45)
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonSection}>
            <BlueButton title={"Send Money"} color={theme.color.blue} />
          </View>
        </ScrollView>
        <CustomTabBar active="trading" />
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
    backgroundColor: theme.color.greyBg2
  },
  walletsSection: {
    marginHorizontal: theme.padding,
    marginTop: theme.padding,
    height: 90,
    backgroundColor: theme.color.white,
    borderRadius: 6,
    padding: theme.padding,
    flexDirection: "row"
  },
  walletLeftSide: {
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  walletRightSide: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  formSection: {
    marginHorizontal: theme.padding,
    marginTop: theme.padding,
    height: 320,
    backgroundColor: theme.color.white,
    borderRadius: 6,
    padding: theme.padding
  },
  buttonSection: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: theme.padding
  },
  menu: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 30
  },
  formFields: {
    flex: 1
  },
  estimation: {
    height: 50,
    justifyContent: "flex-end"
  },
  estimationValue: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  walletAmount: {
    alignItems: "flex-end"
  }
});

export default Trades;
