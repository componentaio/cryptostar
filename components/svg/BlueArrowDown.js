"use strict";

import React, { Component } from "react";
import { Svg } from "expo";

class BlueArrowDown extends Component {
  render() {
    return (
      <Svg
        height={16}
        width={9}
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
            id="07-Trade"
            transform="translate(-320.000000, -184.000000)"
            stroke="#006DFF"
            stroke-width="2"
          >
            <Svg.G id="Group-7" transform="translate(20.000000, 145.000000)">
              <Svg.G
                id="arrow-up"
                transform="translate(308.000000, 43.500000) scale(1, -1) translate(-308.000000, -43.500000) translate(301.000000, 40.000000)"
              >
                <Svg.Polyline id="Shape" points="0 7 7 0 14 7" />
              </Svg.G>
            </Svg.G>
          </Svg.G>
        </Svg.G>
      </Svg>
    );
  }
}

export default BlueArrowDown;
