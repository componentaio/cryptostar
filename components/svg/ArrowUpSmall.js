"use strict";

import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import { Svg } from "expo";
import * as theme from "../../theme/theme.js";

class ArrowUpSmall extends Component {
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
            transform="translate(-236.000000, -330.000000)"
            stroke="#17B978"
            stroke-width="1.2"
          >
            <Svg.G id="Group-7" transform="translate(20.000000, 302.000000)">
              <Svg.G id="Group-8" transform="translate(198.000000, 20.000000)">
                <Svg.G id="arrow-up" transform="translate(19.000000, 9.000000)">
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

export default ArrowUpSmall;
