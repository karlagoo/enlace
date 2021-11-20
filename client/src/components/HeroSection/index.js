import React, {useState} from "react";
import { Button } from "../ButtonElements";

import Video from '../../video/video.mp4';
import  {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
  } from './HeroElements';
  
  function HeroSection() {
    const [hover, setHover] = useState(false);
  
    const onHover = () => {
      setHover(!hover);
    };
    return (
      <HeroContainer id='home'>
        <HeroBg>
          <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>en·​lace (ehn-lah-seh)</HeroH1>
          <HeroP>
            In Spanish, enlace simply translates to link, bond, and connect. 


            Our website provides users with a top-notch calendar and chatroom to make scheduling events with friends and loved ones easy as 1-2-3.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to='signup'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              primary='true'
              dark='true'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    );
  }
  
  export default HeroSection;
  