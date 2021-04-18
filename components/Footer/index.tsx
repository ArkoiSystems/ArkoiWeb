import React from "react";

import {
  AboutContent,
  AboutTitle,
  ContactElement,
  ContactList,
  ContactTitle,
  FooterAbout,
  FooterContact,
  FooterContainer,
  FooterCopyright,
  FooterExtra,
  FooterInfo,
  FooterLinks,
  FooterPrivacy,
  FooterSeparator,
  FooterTerms,
  FooterWrapper,
  LinksElement,
  LinksList,
  LinksTitle,
} from "./Footer.module";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSeparator src={require("../../images/separator_footer.svg")} />
        <FooterInfo>
          <FooterAbout>
            <AboutTitle>Arkoi Systems</AboutTitle>
            <AboutContent>
              The open source programming language made with heart and
              intention. Don’t think, just do it.
            </AboutContent>
          </FooterAbout>
          <FooterLinks>
            <LinksTitle>Useful Links</LinksTitle>
            <LinksList>
              <LinksElement>Blog</LinksElement>
              <LinksElement>Documentation</LinksElement>
              <LinksElement>Source</LinksElement>
              <LinksElement>Playground</LinksElement>
            </LinksList>
          </FooterLinks>
          <FooterContact>
            <ContactTitle>Contact</ContactTitle>
            <ContactList>
              <ContactElement>support@arkoisystems.com</ContactElement>
              <ContactElement>https://github.arkoisystems.com/</ContactElement>
            </ContactList>
          </FooterContact>
        </FooterInfo>
        <FooterExtra>
          <FooterCopyright>
            Copyright © 2019-2021, ArkoiSystems.com
          </FooterCopyright>
          <FooterPrivacy>Privacy</FooterPrivacy>
          <FooterTerms>Terms of Service</FooterTerms>
        </FooterExtra>
      </FooterContainer>
    </FooterWrapper>
  );
}
