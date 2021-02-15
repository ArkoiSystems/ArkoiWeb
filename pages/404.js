import styled from 'styled-components'
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <>
      <ErrorWrapper>
        <ErrorHeader>404</ErrorHeader>
        <ErrorText>It looks like you're lost..<br />Do you want to return?</ErrorText>
        <Link href={"/"}>
          <ErrorButton>Go Back</ErrorButton>
        </Link>
      </ErrorWrapper>
    </>
  )
}

const ErrorWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${(require("../images/background.png"))});
  background-repeat: no-repeat;
  background-size: cover;

  overflow: hidden;
`

const ErrorHeader = styled.div`
  color: #fff;
  font-size: 88px;
  margin-bottom: -5px;
`

const ErrorText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 25px;
`

const ErrorButton = styled.span`
  margin-top: 20px;
  border: 4px solid #FFFFFF;
  box-sizing: border-box;
  color: #fff;
  padding: 5px 28px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 25px;
`

export default ErrorPage