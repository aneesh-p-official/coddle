import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

function BillboardExpand() {
  return (
    <div className="billboard__container">
      <div className="billboard__boarders">
        <div>
          <div id="trigger" />
          <Controller>
            <Scene triggerElement="#trigger" offset={0} duration={750}>
              {progress => (
                <Tween
                  to={{
                    scaleX: "40",
                    ease: "Power4.easeOut"
                  }}
                  ease="Power4.easeOut"
                  totalProgress={progress}
                  paused
                >
                  <div className="section-border section-border-right" />
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>
        <div>
          <Controller>
            <Scene triggerElement="#trigger" offset={0} duration={750}>
              {progress => (
                <Tween
                  to={{
                    scaleX: "0",
                    ease: "Power4.easeOut"
                  }}
                  ease="Power4.easeOut"
                  totalProgress={progress}
                  paused
                >
                  <div className="section-border section-border-left" />
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>
        <div>
          <Controller>
            <Scene triggerElement="#trigger" offset={0} duration={750}>
              {progress => (
                <Tween
                  to={{
                    scaleY: "0",
                    ease: "Power4.easeOut"
                  }}
                  ease="Power4.easeOut"
                  totalProgress={progress}
                  paused
                >
                  <div className="section-border section-border-top" />
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>
        <div>
          <Controller>
            <Scene triggerElement="#trigger" offset={0} duration={750}>
              {progress => (
                <Tween
                  to={{
                    scaleY: "0",
                    ease: "Power4.easeOut"
                  }}
                  ease="Power4.easeOut"
                  totalProgress={progress}
                  paused
                >
                  <div className="section-border section-border-bottom" />
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>
      </div>
      <div className="billboard__image" />
      <div className="billboard">
        <div className="lg:p-12 text-left step">
          <p className="title mb-10 text-white uppercase">Technology</p>
          <h5 className="text-left text-white pb-6">
            Turning sound into touch
          </h5>
          <p className="text-left text-white pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            diam mattis, posuere nunc sit amet, pulvinar ipsum. Vestibulum
            mattis, felis egestas sodales viverra, eros justo rhoncus metus, at
            elementum elit purus placerat ante. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec ac diam mattis, posuere nunc sit
            amet, pulvinar ipsum. Vestibulum mattis, felis egestas sodales
            viverra, eros justo rhoncus metus, at elementum elit purus
            placeratante.,
          </p>
          <a
            className="bg-purple-600 step hover:shadow-md text-white text-xs text-left font-bold py-2 px-4 rounded-full"
            href="0#"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default BillboardExpand;