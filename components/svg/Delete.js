"use strict";
import { View } from "react-native";
import React, { Component } from "react";
import { Svg } from "expo";

class Delete extends Component {
  render() {
    return (
      <View style={this.props.styles}>
        <Svg
          width={24}
          height={18}
          viewBox="0 0 24 18"
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
              id="04-Set-PIN"
              transform="translate(-292.000000, -660.000000)"
              stroke="#141A22"
              stroke-width="2"
            >
              <Svg.G id="Group" transform="translate(60.000000, 470.000000)">
                <Svg.G
                  id="delete"
                  transform="translate(233.000000, 191.000000)"
                >
                  <Svg.Path
                    d="M20,0 L7,0 L0,8 L7,16 L20,16 C21.1045695,16 22,15.1045695 22,14 L22,2 C22,0.8954305 21.1045695,0 20,0 Z"
                    id="Shape"
                  />
                  <Svg.Path d="M17,5 L11,11" id="Shape" />
                  <Svg.Path d="M11,5 L17,11" id="Shape" />
                </Svg.G>
              </Svg.G>
            </Svg.G>
          </Svg.G>
        </Svg>
      </View>
    );
  }
}

export default Delete;
