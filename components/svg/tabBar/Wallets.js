"use strict";

import React, { Component } from "react";

import { Svg } from "expo";

class Wallets extends Component {
  render() {
    return this.props.active ? (
      <Svg
        width={25}
        height={20}
        viewBox="0 0 25 20"
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
          <Svg.G id="05-Home" transform="translate(-34.000000, -752.000000)">
            <Svg.G id="Group-5" transform="translate(0.000000, 732.000000)">
              <Svg.G id="Group-2" transform="translate(30.000000, 20.000000)">
                <Svg.G id="Group" transform="translate(4.000000, 0.000000)">
                  <Svg.Path
                    d="M4.57683e-05,18.0955175 C4.57683e-05,19.1472869 0.857171589,20 1.91461261,20 L21.9753201,20 C22.399505,20 22.7433999,19.6579164 22.7433999,19.2359658 L22.7433999,14.7508306 L19.6108633,14.7508306 C18.0531464,14.7508306 16.7533506,13.5203791 16.7295401,11.9710706 C16.7053712,10.3941041 17.9879108,9.10349759 19.5678509,9.10349759 L22.7433999,9.10349759 L22.7433999,5.59143629 C22.7433999,5.16943477 22.399505,4.82740213 21.9753201,4.82740213 L1.9145102,4.82740213 C1.18386152,4.82740213 0.514659216,4.56080514 4.57683e-05,4.12021211 L4.57683e-05,18.0955175 Z"
                    id="Shape"
                    fill="#141A22"
                    fill-rule="nonzero"
                  />
                  <Svg.Path
                    d="M23.6732168,10.1222302 L19.5678304,10.1222302 C18.5673297,10.1222302 17.7533187,10.9319027 17.7533187,11.9271845 C17.7533187,12.9224154 18.5673297,13.7321388 19.5678304,13.7321388 L23.6732168,13.7321388 C23.9036407,13.7321388 24.0911034,13.5456126 24.0911034,13.3164533 L24.0911034,10.5379157 C24.0911034,10.3087055 23.9036407,10.1222302 23.6732168,10.1222302 Z"
                    id="Path"
                    fill="#006DFF"
                  />
                  <Svg.Path
                    d="M0.000547580419,1.95017174 C0.0252285438,2.98981849 0.90493591,3.80865935 1.95034369,3.80865935 L20.6666044,3.80865935 L20.6666044,0.764034168 C20.6666044,0.342032626 20.3227094,0 19.8985246,0 L1.91444876,0 C0.843489528,0 -0.0249526681,0.879250522 0.000547580419,1.95017174 Z"
                    id="Path"
                    fill="#A6B0B9"
                  />
                </Svg.G>
              </Svg.G>
            </Svg.G>
          </Svg.G>
        </Svg.G>
      </Svg>
    ) : (
      <Svg
        width={25}
        height={20}
        viewBox="0 0 25 20"
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
            id="08-Alerts"
            transform="translate(-34.000000, -752.000000)"
            fill="#D1D7DD"
          >
            <Svg.G id="Group-5" transform="translate(0.000000, 732.000000)">
              <Svg.G id="Group-2" transform="translate(30.000000, 20.000000)">
                <Svg.G id="Group" transform="translate(4.000000, 0.000000)">
                  <Svg.Path
                    d="M4.57683e-05,18.0955175 C4.57683e-05,19.1472869 0.857171589,20 1.91461261,20 L21.9753201,20 C22.399505,20 22.7433999,19.6579164 22.7433999,19.2359658 L22.7433999,14.7508306 L19.6108633,14.7508306 C18.0531464,14.7508306 16.7533506,13.5203791 16.7295401,11.9710706 C16.7053712,10.3941041 17.9879108,9.10349759 19.5678509,9.10349759 L22.7433999,9.10349759 L22.7433999,5.59143629 C22.7433999,5.16943477 22.399505,4.82740213 21.9753201,4.82740213 L1.9145102,4.82740213 C1.18386152,4.82740213 0.514659216,4.56080514 4.57683e-05,4.12021211 L4.57683e-05,18.0955175 Z"
                    id="Shape"
                    fill-rule="nonzero"
                  />
                  <Svg.Path
                    d="M23.6732168,10.1222302 L19.5678304,10.1222302 C18.5673297,10.1222302 17.7533187,10.9319027 17.7533187,11.9271845 C17.7533187,12.9224154 18.5673297,13.7321388 19.5678304,13.7321388 L23.6732168,13.7321388 C23.9036407,13.7321388 24.0911034,13.5456126 24.0911034,13.3164533 L24.0911034,10.5379157 C24.0911034,10.3087055 23.9036407,10.1222302 23.6732168,10.1222302 Z"
                    id="Path"
                  />
                  <Svg.Path
                    d="M0.000547580419,1.95017174 C0.0252285438,2.98981849 0.90493591,3.80865935 1.95034369,3.80865935 L20.6666044,3.80865935 L20.6666044,0.764034168 C20.6666044,0.342032626 20.3227094,0 19.8985246,0 L1.91444876,0 C0.843489528,0 -0.0249526681,0.879250522 0.000547580419,1.95017174 Z"
                    id="Path"
                  />
                </Svg.G>
              </Svg.G>
            </Svg.G>
          </Svg.G>
        </Svg.G>
      </Svg>
    );
  }
}

export default Wallets;
