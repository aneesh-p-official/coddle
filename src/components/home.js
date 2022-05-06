import React, { useRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import Sequence from "../Sequence";
import ArrayImg from "../ArrayImg";
import { Tween, Timeline } from "react-gsap";
import Sticky from "./component-x";
import NewLaunches from "./new-launches";
import NewLaunchImg from "../NewLaunchImages";
import BillboardExpand from "./SectionExpand";

const HomeWrap = () => {
  const ref = useRef();
  return (
    <div className="App">
      <div className="nb">
        <Controller >
          <Scene duration={3000} triggerHook="onLeave" pin>
            {progress => (
              <div className="main-bnr">
                <ArrayImg ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
        </Controller>
        <Sticky />
      </div>
      <section className="intro-main">
      <Controller>
          <Scene duration={500} triggerElement="#second-container" offset={-100}>
          {(progress) => (
            <Tween
            from={{
              scale: 2,
              css: {
                opacity: '0',
                transform: 'scale(1.3)'
              },
              ease: 'Circ.easeOutExpo',
            }}
            to={{
              scale: 1,
              css: {
                opacity: '1',
                transform: 'scale(1)'
              },
              ease: 'Circ.easeOutExpo',
            }}
            stagger={0.2}
            totalProgress={progress}
            paused
            >
              <div id="second-container" className="intro-wrap">
                <h3>Efficient and <br/>Quality Innovation</h3>
                <p>Fusce id diam sed erat sodales fermentum. Morbi et iaculis ipsum, at fringilla elit. Cras faucibus orci nec est maximus, in molestie enim ultricies. Aliquam et mi elit. </p>
                <div className="counter-place">
                  <div className="counter-item">
                    <CountUp end={15} redraw={false} suffix=" +" duration={2.5} useEasing={true}>
                      {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                              <span className="counter" ref={countUpRef} />
                          </VisibilitySensor>
                      )}
                    </CountUp>
                    <span className="counter-label">AWARDS</span>
                  </div>
                  <div className="counter-item">
                    <CountUp end={90} redraw={false} suffix=" +" duration={2.5}>
                      {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                              <span className="counter" ref={countUpRef} />
                          </VisibilitySensor>
                      )}
                    </CountUp>
                    <span className="counter-label">PROJECTS</span>
                  </div>
                  <div className="counter-item">
                    <CountUp end={8} redraw={false} suffix=" +" duration={2.5}>
                      {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                              <span className="counter" ref={countUpRef} />
                          </VisibilitySensor>
                      )}
                    </CountUp>
                    <span className="counter-label">LOCATIONS</span>
                  </div>
                  <div className="counter-item">
                    <CountUp end={76} redraw={false} suffix=" +" duration={2.5}>
                      {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                              <span className="counter" ref={countUpRef} />
                          </VisibilitySensor>
                      )}
                    </CountUp>
                    <span className="counter-label">CLIENTS</span>
                  </div>
                </div>
                
              </div>
            </Tween>    
            )}
          </Scene>
        </Controller>
        {/* <div className="bg">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      </section>
      <section className="pin-hrz">
        <Controller >
          <Scene duration={4000} triggerHook="onLeave" pin>
            {progress => (
                <div style={{ height: "100vh", position: "relative" }}>
                  <NewLaunchImg ref={ref} progress={progress} />
                </div>
            )}
          </Scene>
        </Controller>
        <NewLaunches />
      </section>
      {/* <section className="pin-hrz">
        <Controller >
          <Scene duration={4000} triggerHook="onLeave" pin>
            {progress => (
                <div className="sequence-sec">
                  <Sequence ref={ref} progress={progress} />
                </div>
            )}
          </Scene>
          <Scene
              duration={3500}
              triggerHook={'onLeave'}
              pin={{ pushFollowers: false }}
            >
              {(progress) => (
                <div className="mx-auto trig-text">
                  <Timeline totalProgress={progress} paused>
                    <Timeline
                      target={
                        <p className="timeline">
                          Our Latest<span>Living Experience</span>
                        </p>
                      }
                    >
                      <Tween from={{ x: "-100%" }} to={{ x: "100%" }} />
                    </Timeline>
                  </Timeline>
                </div>
              )}
            </Scene>
            <Scene
              duration={4000}
              pin={true} enabled={true}
            >
              {(progress) => (
                <div className="mx-auto trig-sub-text">
                  <Timeline totalProgress={progress} paused>
                    <Timeline
                      target={
                        <button className="cta">
                          <span className="hover-underline-animation"> Explore Now </span>
                          <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="60" height="20" viewBox="0 0 46 16">
                            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                          </svg>
                        </button>
                      }
                    >
                      <Tween from={{ x: "-100%" }} to={{ x: "0%" }} />
                    </Timeline>
                  </Timeline>
                </div>
              )}
            </Scene>
        </Controller>
      </section> */}
      
      <div>
        <Controller>
            <Scene duration={300} triggerElement="#Footer" offset={500}>
            {(progress) => (
              <Tween
              from={{
                css: {
                  opacity: '1',
                },
                ease: 'Circ.easeOutExpo',
              }}
              to={{
                css: {
                  opacity: '0.1',
                },
                ease: 'Circ.easeOutExpo',
              }}
                totalProgress={progress}
                paused
              >
                <div id='Footer' className="footer">
                    <div className="footer-inner">
                      © 2022, HighLines Pvt. Ltd.
                    </div>
                </div>
              </Tween>    
            )}
          </Scene>
        </Controller>
      </div>
    </div>
  );
};

export default HomeWrap;
