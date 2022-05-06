// @flow
import React, { useRef } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Badge from '../images/badge.png'


const NewLaunches = () => {
  const ref = useRef();
  return (
    <div className="section-new-launch section-sticky">
      <Controller>
        <Scene
          duration={4000} pin={true} offset={350}>
            <Timeline>
            <Tween
              from={{ y: -60 }} to={{ y: 0 }}>
              <div style={{paddingTop: 40}}>
                <h4>New Launches</h4>
                <h3>Impression U-Thant</h3>
              </div>
            </Tween>
            <Tween
              from={{ y: 200 }} to={{ y: 200 }}>
              <div className='nl-inner'>
                <div className='nl-left'>
                  <div className='price-label'>Price From</div>
                  <div className='price-amount'>RM 1,325,000</div>
                  <p>Impression U-Thant is ready to make its mark in the heart of Kuala Lumpur. It’s a freehold development with views of Asia’s oldest golf course – The Royal Selangor Golf Club.</p>
                  <button className="cta">
                    <span className="hover-underline-animation">Explore Now</span>
                    <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                      <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                    </svg>
                  </button>
                </div>
                <div className='nl-right'>
                  <a href='#'>
                    <img src={Badge} />
                  </a>
                </div>
              </div>
            </Tween>
            </Timeline>
        </Scene>
      </Controller>
    </div>
  );
};

export default NewLaunches;