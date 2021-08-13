import React,{useState} from 'react';
import Video from '../../videos/video.mp4';
import{ Button } from '../ButtonElements';
import{
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const[hover,setHover]=useState(false)
    const onHover=()=>{
        setHover(!hover)
    }

    return (
        <HeroContainer id='home' >
            <HeroBg>
                <VideoBg  src={Video} type='video/mp4' autoPlay loop muted  ></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Wanawake Kwa Wanawake Kenya
                </HeroH1>
                <HeroP>
                The chance to take back control.
                 The chance of a future.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to ='about' onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true} 
                    duration ={500}
                     spy={true} 
                     exact='true' 
                     offset={-80}>
                        Get to know us {hover ?
                        <ArrowForward/> :
                        <ArrowRight/>}
                        </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
