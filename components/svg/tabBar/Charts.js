"use strict";

import React, { Component } from "react";

import { Svg } from "expo";

class Wallets extends Component {
  render() {
    return this.props.active ? (
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
            id="06-Charts"
            transform="translate(-108.000000, -752.000000)"
            fill="#141A22"
            fill-rule="nonzero"
          >
            <Svg.G id="Group-5" transform="translate(0.000000, 732.000000)">
              <Svg.G id="Group-2" transform="translate(103.000000, 20.000000)">
                <Svg.Path
                  d="M9.226888,0 C6.88531317,0 5,1.88531317 5,4.226888 L5,15.7731117 C5,18.1146867 6.88531317,20 9.226888,20 L20.7731117,20 C23.1146867,20 25,18.1146867 25,15.7731117 L25,4.226888 C25,1.88531317 23.1146867,0 20.7731117,0 L9.226888,0 Z M18.3333333,4.16666667 L20,4.16666667 L20,15 L18.3333333,15 L18.3333333,4.16666667 Z M14.1666667,7.5 L15.8333333,7.5 L15.8333333,15 L14.1666667,15 L14.1666667,7.5 Z M10,10.8333333 L11.6666667,10.8333333 L11.6666667,15 L10,15 L10,10.8333333 Z"
                  id="Shape"
                />
              </Svg.G>
            </Svg.G>
          </Svg.G>
        </Svg.G>
      </Svg>
    ) : (
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
            transform="translate(-108.000000, -752.000000)"
            fill="#D1D7DD"
            fill-rule="nonzero"
          >
            <Svg.G id="Group-5" transform="translate(0.000000, 732.000000)">
              <Svg.G id="Group-2" transform="translate(103.000000, 20.000000)">
                <Svg.Path
                  d="M9.226888,0 C6.88531317,0 5,1.88531317 5,4.226888 L5,15.7731117 C5,18.1146867 6.88531317,20 9.226888,20 L20.7731117,20 C23.1146867,20 25,18.1146867 25,15.7731117 L25,4.226888 C25,1.88531317 23.1146867,0 20.7731117,0 L9.226888,0 Z M18.3333333,4.16666667 L20,4.16666667 L20,15 L18.3333333,15 L18.3333333,4.16666667 Z M14.1666667,7.5 L15.8333333,7.5 L15.8333333,15 L14.1666667,15 L14.1666667,7.5 Z M10,10.8333333 L11.6666667,10.8333333 L11.6666667,15 L10,15 L10,10.8333333 Z"
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

export default Wallets;
