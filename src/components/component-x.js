// @flow
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import Logo from "../images/logo.svg";

const Sticky = () => (
    <div className="section section-sticky">
    <Controller>
      <Scene
        duration={1000} pin={true} offset={160}>
          <Tween
          from={{
            top: '0%',
            scale: 0.8,
            opacity: 1
          }}
          to={{
            top: '-100%',
            scale: 1.2,
            opacity: 1
          }}
          >
            <img src={Logo} alt='logo' className='logo-img' />
            <h4>Finding Possibilities</h4>
          </Tween>
      </Scene>
      <Scene duration={1000} pin={true} enabled={true} offset={160}>
        <Tween
          from={{
            top: '0%',
            scale: 1,
            opacity: 0
          }}
          to={{
            top: '-100%',
            scale: 1.2,
            opacity: 1
          }}
          >
            <h2>Make your <span>Living Better</span></h2>
          </Tween>
      </Scene>
      <Scene duration={1000} pin={true} enabled={true} offset={60}>
        <Tween
          from={{
            top: '0%',
            scale: 1,
            opacity: 0
          }}
          to={{
            top: '-100%',
            scale: 1.2,
            opacity: 1
          }}
          >
            <button className="cta">
              <span className="hover-underline-animation"> Explore Now </span>
              <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="50" height="20" viewBox="0 0 46 16">
                <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
              </svg>
            </button>
          </Tween>
      </Scene>
    </Controller>
    </div>
);

export default Sticky;