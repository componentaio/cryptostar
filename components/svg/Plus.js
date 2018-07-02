"use strict";

import React, { Component } from "react";
import { Svg } from "expo";

class Plus extends Component {
  render() {
    return (
      <Svg
        width={22}
        height={22}
        viewBox="0 0 22 22"
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
            transform="translate(-324.000000, -112.000000)"
            stroke="#006DFF"
            stroke-width="2"
          >
            <Svg.G id="Group-11">
              <Svg.G id="plus" transform="translate(325.000000, 113.000000)">
                <Svg.Path d="M10,0 L10,20" id="Shape" />
                <Svg.Path
                  d="M0,10 C5.43884187,10 9.47401139,10 12.1055085,10 C14.7370057,10 17.3685028,10 20,10"
                  id="Shape"
                />
              </Svg.G>
            </Svg.G>
          </Svg.G>
        </Svg.G>
      </Svg>
    );
  }
}

export default Plus;
