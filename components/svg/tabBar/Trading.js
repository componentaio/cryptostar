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
          <Svg.G
            id="07-Trade"
            transform="translate(-179.000000, -752.000000)"
            fill-rule="nonzero"
          >
            <Svg.G id="Group-5" transform="translate(0.000000, 732.000000)">
              <Svg.G id="Group-2" transform="translate(174.000000, 20.000000)">
                <Svg.G id="Group-3" transform="translate(5.000000, 0.000000)">
                  <Svg.Path
                    d="M22,5.75100914 L16.4550456,5.75100914 C15.9916966,5.75100914 15.6160781,6.12662769 15.6160781,6.58997667 C15.6160781,6.80975033 15.7023157,7.02074895 15.85625,7.17760782 L16.5691432,7.90404532 C16.9507363,8.29288831 16.9508521,8.91563835 16.5694038,9.3046233 L9.71367398,16.2958073 C9.33232695,16.6846889 9.33232695,17.307238 9.71367398,17.6961196 L11.2589269,19.2719034 C11.6456125,19.666229 12.2787472,19.6724225 12.6730728,19.285737 C12.677729,19.281171 12.6823404,19.2765596 12.6869064,19.2719034 L19.4878278,12.3366107 C19.8745134,11.942285 20.5076481,11.9360915 20.9019737,12.3227771 C20.9067185,12.3274299 20.9114167,12.3321299 20.9160678,12.3368764 L21.6010417,13.035904 C21.9164867,13.357821 22.4331708,13.3630676 22.7550878,13.0476226 C22.9117298,12.8941298 23,12.6840499 23,12.4647402 L23,6.75100914 C23,6.19872439 22.5522847,5.75100914 22,5.75100914 Z"
                    id="Shape"
                    fill="#006DFF"
                  />
                  <Svg.Path
                    d="M13.286326,2.30388037 L11.7410731,0.728096598 C11.3543875,0.333770961 10.7212528,0.327577469 10.3269272,0.714263047 C10.322271,0.718829014 10.3176596,0.723440418 10.3130936,0.728096598 L3.51217216,7.66338934 C3.12548658,8.05771498 2.4923519,8.06390847 2.09802626,7.67722289 C2.09328152,7.67257008 2.08858328,7.66787009 2.08393224,7.66312362 L1.39895833,6.96409603 C1.0835133,6.64217897 0.566829233,6.63693236 0.244912174,6.95237739 C0.0882701799,7.10587016 2.10982452e-15,7.31595009 2.33146835e-15,7.53525979 L0,13.2489909 C-9.13419418e-16,13.8012756 0.44771525,14.2489909 1,14.2489909 L6.54495441,14.2489909 C7.00830339,14.2489909 7.38392195,13.8733723 7.38392195,13.4100233 C7.38392195,13.1902497 7.29768426,12.979251 7.14375,12.8223922 L6.43085679,12.0959547 C6.04926371,11.7071117 6.04914785,11.0843617 6.43059622,10.6953767 L13.286326,3.70419272 C13.667673,3.3153111 13.667673,2.69276198 13.286326,2.30388037 Z"
                    id="Shape"
                    fill="#141A22"
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
            id="05-Home"
            transform="translate(-179.000000, -752.000000)"
            fill="#D1D7DD"
            fill-rule="nonzero"
          >
            <Svg.G id="Group-5" transform="translate(0.000000, 732.000000)">
              <Svg.G id="Group-2" transform="translate(174.000000, 20.000000)">
                <Svg.G id="Group-3" transform="translate(5.000000, 0.000000)">
                  <Svg.Path
                    d="M22,5.75100914 L16.4550456,5.75100914 C15.9916966,5.75100914 15.6160781,6.12662769 15.6160781,6.58997667 C15.6160781,6.80975033 15.7023157,7.02074895 15.85625,7.17760782 L16.5691432,7.90404532 C16.9507363,8.29288831 16.9508521,8.91563835 16.5694038,9.3046233 L9.71367398,16.2958073 C9.33232695,16.6846889 9.33232695,17.307238 9.71367398,17.6961196 L11.2589269,19.2719034 C11.6456125,19.666229 12.2787472,19.6724225 12.6730728,19.285737 C12.677729,19.281171 12.6823404,19.2765596 12.6869064,19.2719034 L19.4878278,12.3366107 C19.8745134,11.942285 20.5076481,11.9360915 20.9019737,12.3227771 C20.9067185,12.3274299 20.9114167,12.3321299 20.9160678,12.3368764 L21.6010417,13.035904 C21.9164867,13.357821 22.4331708,13.3630676 22.7550878,13.0476226 C22.9117298,12.8941298 23,12.6840499 23,12.4647402 L23,6.75100914 C23,6.19872439 22.5522847,5.75100914 22,5.75100914 Z"
                    id="Shape"
                  />
                  <Svg.Path
                    d="M13.286326,2.30388037 L11.7410731,0.728096598 C11.3543875,0.333770961 10.7212528,0.327577469 10.3269272,0.714263047 C10.322271,0.718829014 10.3176596,0.723440418 10.3130936,0.728096598 L3.51217216,7.66338934 C3.12548658,8.05771498 2.4923519,8.06390847 2.09802626,7.67722289 C2.09328152,7.67257008 2.08858328,7.66787009 2.08393224,7.66312362 L1.39895833,6.96409603 C1.0835133,6.64217897 0.566829233,6.63693236 0.244912174,6.95237739 C0.0882701799,7.10587016 2.10982452e-15,7.31595009 2.33146835e-15,7.53525979 L0,13.2489909 C-9.13419418e-16,13.8012756 0.44771525,14.2489909 1,14.2489909 L6.54495441,14.2489909 C7.00830339,14.2489909 7.38392195,13.8733723 7.38392195,13.4100233 C7.38392195,13.1902497 7.29768426,12.979251 7.14375,12.8223922 L6.43085679,12.0959547 C6.04926371,11.7071117 6.04914785,11.0843617 6.43059622,10.6953767 L13.286326,3.70419272 C13.667673,3.3153111 13.667673,2.69276198 13.286326,2.30388037 Z"
                    id="Shape"
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