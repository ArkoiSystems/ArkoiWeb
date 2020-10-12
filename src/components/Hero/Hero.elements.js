import styled from "styled-components";

export const HeroWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 700px;
  
  display: grid;
  justify-content: center;
  align-items: center;
  
  background-image: url(${(require("../../images/hero_background.png"))});
  background-repeat: no-repeat;
  background-size: cover;
  
  overflow: hidden;
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1000px;

  display: grid;
  grid-template-areas: "col1 col2";
  grid-auto-columns: 1fr;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 1060px) {
    width: calc(100% - 40px);
    margin: 0 20px;
    
    grid-template-areas: "col1" "col2";
  }
`;

export const HeroInformation = styled.div`
  grid-area: col1;
  margin: 0 10px;
`;

export const HeroHeadline = styled.h4`
  margin-bottom: 16px;
  
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 700;
  font-size: 16px;
  color: #01BF71;
  
  @media screen and (max-width: 1060px) {
    margin-bottom: 8px;
  
    font-size: 14px;
  }
`;

export const HeroTitle = styled.h1`
  margin-bottom: 24px;
  
  color: rgba(247, 248, 250);
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  
  @media screen and (max-width: 1060px) {
    margin-bottom: 10px;
  
    font-size: 42px;
  }
`;

export const HeroDescription = styled.p`
  max-width: 440px;
    
  line-height: 24px;
  font-size: 18px;
  color: #fff;
  
  @media screen and (max-width: 1060px) {
    margin-bottom: 20px;
    max-width: 650px;
    
    font-size: 16px;
  }
`;

export const HeroPicture = styled.img`
  width: 80%;
  grid-area: col2;
  margin: 0 auto;
  
  @media screen and (max-width: 1060px) {
    width: 60%;
    min-width: 350px;
  }
`;

export const HeroSeparator = styled.img`
  width: 101%;
  
  position: absolute;
  bottom: -1px;
  left: 0;
`;