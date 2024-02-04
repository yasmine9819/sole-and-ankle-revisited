/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <ModalContent
        style={{ boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)" }}
      >
        <StyledButton>
          {/* <VisuallyHidden>Dismiss menu</VisuallyHidden> */}
          <Icon id="close" onClick={onDismiss} />
        </StyledButton>

        <Side />
        <Nav>
          <Link href="/sale">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </ModalContent>
    </Modal>
  );
};

const StyledButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Modal = styled(DialogOverlay)`
  background-color: hsla(220, 5%, 40%, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
`;

const ModalContent = styled(DialogContent)`
  background-color: hsla(0, 0%, 100%, 1);
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  width: 300px;
  position: fixed;
  right: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  gap: 14px;
`;

const Link = styled.a`
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  text-decoration: none;
  color: hsla(220, 3%, 20%, 1);
  &:first-of-type {
    color: hsla(240, 60%, 63%, 1);
  }
`;
const FooterLink = styled.a`
  font-family: Raleway;
  font-size: 14px;
  font-weight: 500;
  color: hsla(210, 5%, 40%, 1);
  text-decoration: none;
`;
const Side = styled.div`
  flex: 1;
`;

export default MobileMenu;
