"use strict";

import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import { Svg } from "expo";
import * as theme from "../../theme/theme.js";

class ArrowDownSmall extends Component {
  render() {
    return (
      <Svg
        width={9}
        height={6}
        viewBox="0 0 9 6"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Svg.G
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <Svg.G
            id="05-Home"
            transform="translate(-237.000000, -441.000000)"
            stroke="#DC2F2F"
            stroke-width="1.2"
          >
            <Svg.G id="Group-7" transform="translate(20.000000, 413.000000)">
              <Svg.G id="Group-9" transform="translate(199.000000, 20.000000)">
                <Svg.G
                  id="arrow-up"
                  transform="translate(22.500000, 11.000000) scale(1, -1) translate(-22.500000, -11.000000) translate(19.000000, 9.000000)"
                >
                  <Svg.Polyline id="Shape" points="0 3.5 3.5 0 7 3.5" />
                </Svg.G>
              </Svg.G>
            </Svg.G>
          </Svg.G>
        </Svg.G>
      </Svg>
    );
  }
}

const styles = StyleSheet.create({});

export default ArrowDownSmall;
