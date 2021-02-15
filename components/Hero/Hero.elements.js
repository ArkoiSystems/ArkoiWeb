import styled from "styled-components";

export const HeroWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  min-height: 700px;
  max-height: 800px;
  
  display: grid;
  justify-content: center;
  align-items: center;
  
  background-image: url(${(require("../../images/background.png"))});
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

export const HeroElement = styled.svg`
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  fill: rgba(255, 255, 255, 0.1);
  animation: animate 25s linear infinite;
  bottom: -150px;
`;

export const HeroElements = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  & ${HeroElement}:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  & ${HeroElement}:nth-child(2){
      left: 10%;
      width: 20px;
      height: 20px;
      animation-delay: 2s;
      animation-duration: 12s;
  }
  
  & ${HeroElement}:nth-child(3){
      left: 70%;
      width: 20px;
      height: 20px;
      animation-delay: 4s;
  }
  
  & ${HeroElement}:nth-child(4){
      left: 40%;
      width: 60px;
      height: 60px;
      animation-delay: 0s;
      animation-duration: 18s;
  }
  
  & ${HeroElement}:nth-child(5){
      left: 65%;
      width: 20px;
      height: 20px;
      animation-delay: 0s;
  }
  
  & ${HeroElement}:nth-child(6){
      left: 75%;
      width: 110px;
      height: 110px;
      animation-delay: 3s;
  }
  
  & ${HeroElement}:nth-child(7){
      left: 35%;
      width: 150px;
      height: 150px;
      animation-delay: 7s;
  }
  
  & ${HeroElement}:nth-child(8){
      left: 50%;
      width: 25px;
      height: 25px;
      animation-delay: 15s;
      animation-duration: 45s;
  }
  
  & ${HeroElement}:nth-child(9){
      left: 20%;
      width: 15px;
      height: 15px;
      animation-delay: 2s;
      animation-duration: 35s;
  }
  
  @keyframes animate {
      0%{
          transform: translateY(0) rotate(0deg);
          opacity: 0;
      }
      50% {
          opacity: 1;
      }
      100%{
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
      }
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
  z-index: 1;
  
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
  z-index: 1;
`;