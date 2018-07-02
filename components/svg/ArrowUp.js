"use strict";
import { View } from "react-native";
import React, { Component } from "react";
import { Svg } from "expo";

class ArrowUp extends Component {
  render() {
    return (
      <View style={this.props.styles}>
        <Svg
          width={16}
          height={9}
          viewBox="0 0 16 9"
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
              transform="translate(-188.000000, -119.000000)"
              stroke="#17B978"
              stroke-width="2"
            >
              <Svg.G id="Group-11">
                <Svg.G id="Group-6" transform="translate(30.000000, 74.000000)">
                  <Svg.G
                    id="arrow-up"
                    transform="translate(159.000000, 46.000000)"
                  >
                    <Svg.Polyline id="Shape" points="0 7 7 0 14 7" />
                  </Svg.G>
                </Svg.G>
              </Svg.G>
            </Svg.G>
          </Svg.G>
        </Svg>
      </View>
    );
  }
}

export default ArrowUp;
