"use strict";

import React, { Component } from "react";
import { Svg } from "expo";

class ArrowLeft extends Component {
  render() {
    return (
      <Svg
        width={26}
        height={16}
        viewBox="0 0 26 16"
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
            id="02-Signup"
            transform="translate(-29.000000, -91.000000)"
            stroke="#000000"
            stroke-width="2"
          >
            <Svg.G id="arrow-left" transform="translate(30.000000, 92.000000)">
              <Svg.Path d="M24,7 L0,7" id="Shape" />
              <Svg.Polyline id="Shape" points="7 14 0 7 7 0" />
            </Svg.G>
          </Svg.G>
        </Svg.G>
      </Svg>
    );
  }
}

export default ArrowLeft;
