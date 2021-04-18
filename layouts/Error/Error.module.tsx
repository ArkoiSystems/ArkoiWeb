import styled from "styled-components";

export const ErrorWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${require("../../images/background.png")});
  background-repeat: no-repeat;
  background-size: cover;

  overflow: hidden;
`;

export const ErrorHeader = styled.div`
  color: #fff;
  font-size: 88px;
  margin-bottom: -5px;
`;

export const ErrorText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 25px;
`;

export const ErrorButton = styled.span`
  margin-top: 20px;
  border: 4px solid #ffffff;
  box-sizing: border-box;
  color: #fff;
  padding: 5px 28px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 25px;
`;
