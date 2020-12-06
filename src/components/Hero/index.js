import React from 'react';

import {
  HeroContainer,
  HeroDescription,
  HeroHeadline,
  HeroInformation,
  HeroPicture, HeroSeparator,
  HeroTitle,
  HeroWrapper
} from "./Hero.elements";

function Hero() {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroInformation>
          <HeroHeadline>Premium Quality</HeroHeadline>
          <HeroTitle>Software easy and cheap</HeroTitle>
          <HeroDescription>
            With Arkoi Systems you get your personalized software quickly and cheaply with
            lifetime support.
          </HeroDescription>
        </HeroInformation>
        <HeroPicture src={require("../../images/hero_picture.svg")} />
        <HeroSeparator src={require("../../images/separator_hero.svg")}/>
      </HeroContainer>
    </HeroWrapper>
  )
}

export default Hero;