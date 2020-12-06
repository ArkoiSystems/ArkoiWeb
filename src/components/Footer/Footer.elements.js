import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: relative;

  width: 100%;
  
  background-image: url(${(require("../../images/background.png"))});
  background-repeat: no-repeat;
  background-size: cover;
  
  overflow: hidden;
`;

export const FooterSeparator = styled.img`
  width: 100%;
  
  position: absolute;
  left: 0;
  top: 0;
`;

export const FooterContainer = styled.div`
  width: 100%;
  
  margin-top: calc((100% / 1440) * 89);
  
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterInfo = styled.div`
  width: 80%;
  margin-top: 50px;
  
  display: inline-flex;
  
  @media screen and (max-width: 950px) {
    display: inline-block;
    width: auto;
  }
`;

// Footer About Section

export const FooterAbout = styled.div`
  width: 50%;
  min-width: 250px;
  
  @media screen and (max-width: 950px) {
    margin-bottom: 20px;
  }
`;

export const AboutTitle = styled.h4`
  font-size: 26px;
  color: white;
`;

export const AboutContent = styled.p`
  font-size: 15px;
  color: #e1e1e1;
  max-width: 25ch;
  line-height: 1.4;
`;

// Footer Links Section

export const FooterLinks = styled.div`
  color: white;
  width: 25%;
  min-width: 250px;
  
  @media screen and (max-width: 950px) {
    margin-bottom: 20px;
  }
`;

export const LinksTitle = styled.h4`
  font-size: 26px;
  color: white;
`;

export const LinksList = styled.ul`
  list-style-type: none;
`;

export const LinksElement = styled.li`
  font-size: 15px;
  color: #e1e1e1;
  line-height: 1.4;
`;

// Footer Contact Section

export const FooterContact = styled.div`
  color: white;
  width: 25%;
  min-width: 250px;
`;

export const ContactTitle = styled.h4`
  font-size: 26px;
  color: white;
`;

export const ContactList = styled.ul`
  list-style-type: none;
`;

export const ContactElement = styled.li`
  font-size: 15px;
  color: #e1e1e1;
  line-height: 1.4;
`;

export const FooterExtra = styled.div`
  width: 100%;
  margin-top: 30px;
  
  display: inline-flex;
  justify-content: center;
  
  font-size: 14px;
  color: #e1e1e1;
  
  bottom: 0;
  left: 0;
`;

export const FooterCopyright = styled.div`
  margin: 20px 10px;
`;

export const FooterPrivacy = styled.div`
  margin: 20px 10px;
`;

export const FooterTerms = styled.div`
  margin: 20px 10px;
`;