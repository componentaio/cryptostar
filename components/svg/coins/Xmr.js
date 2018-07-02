"use strict";

import React, { Component } from "react";
import { Svg } from "expo";

class Xmr extends Component {
  render() {
    return (
      <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Svg.G
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <Svg.G
            id="05-Home"
            transform="translate(-40.000000, -686.000000)"
            fill-rule="nonzero"
          >
            <Svg.G id="Group-7" transform="translate(20.000000, 635.000000)">
              <Svg.G id="Monero" transform="translate(20.000000, 51.000000)">
                <Svg.Path
                  d="M18.15625,15.1384615 L14.25,15.1384615 L14.25,9.84615385 L9.90625,14.1230769 L5.5625,9.84615385 L5.5625,15.1384615 L1.65625,15.1384615 L1.53125,15.1384615 C3.28125,17.8769231 6.375,19.7230769 9.90625,19.7230769 C13.4375,19.7230769 16.53125,17.9076923 18.28125,15.1384615 L18.15625,15.1384615 Z"
                  id="Shape"
                  fill="#4C4C4C"
                />
                <Svg.Path
                  d="M3.5,13.1076923 L3.5,4.98461538 L9.90625,11.2923077 L16.3125,4.98461538 L16.3125,13.1076923 L19.28125,13.1076923 C19.625,12.1230769 19.8125,11.0769231 19.8125,9.96923077 C19.8125,4.58461538 15.375,0.215384615 9.90625,0.215384615 C4.4375,0.215384615 0,4.58461538 0,9.96923077 C0,11.0769231 0.1875,12.1230769 0.53125,13.1076923 L3.5,13.1076923 Z"
                  id="Shape"
                  fill="#FF6B01"
                />
              </Svg.G>
            </Svg.G>
          </Svg.G>
        </Svg.G>
      </Svg>
    );
  }
}

export default Xmr;
