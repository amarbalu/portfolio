import React from "react";
import styled from "styled-components";
import mail from "../../assets/mail.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import medium from "../../assets/medium.png";
import whatsapp from "../../assets/whatsapp.png";
import phone from "../../assets/phone.png";

const FooterComponent = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem; /* Spacing between icons */
  img {
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.1); /* Slightly enlarges the icon on hover */
  }
`;

const Footer = () => {
  return (
    <FooterComponent>
      <IconWrapper>
        <a href="tel:+918675669432" aria-label="Phone">
          <img width="36" height="36" src={phone} alt="github" />
        </a>
        <a
          href="https://wa.me/8675669432"
          target="_blank"
          aria-label="WhatsApp"
        >
          <img width="36" height="36" src={whatsapp} alt="github" />
        </a>
        <a href="mailto:inboxamarbalu@gmail.com">
          <img width="36" height="36" src={mail} alt="mail" />
        </a>
        <a
          href="https://www.linkedin.com/in/baluamarnath"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width="36" height="36" src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://github.com/amarbalu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width="36" height="36" src={github} alt="github" />
        </a>
        <a
          href="https://medium.com/@inboxamarbalu"
          target="_blank"
          aria-label="Medium"
        >
          <img width="36" height="36" src={medium} alt="github" />
        </a>
      </IconWrapper>
    </FooterComponent>
  );
};

export default Footer;
