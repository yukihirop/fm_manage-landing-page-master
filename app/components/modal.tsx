import React from "react";
import styled from "@emotion/styled";
import { md } from "styles/media-query";

const ModalContainer = styled.div`
  display: none;

  ${md} {
    display: block;
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.neutral.darkGrayishBlue};
    opacity: 0.7;
    overflow: hidden;
    z-index: 100;
  }
`;

const ModalMenu = styled.section`
  display: none;

  ${md} {
    display: flex;
    position: absolute;
    top: 10%;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    margin: auto;
    background-color: white;
    opacity: 1;
    z-index: 100;
    border-radius: .4rem;
  }

  ul {
    width: 100%;
    list-style: none;
    padding-left: 0;

    li {
      margin: 0 auto;
      padding-top: 1rem;
      padding-bottom: 1rem;
      text-align: center;
      font-weight: 500;
      font-size: 1.2rem;

      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.colors.primary.brightRed};
      }
    }
  }
`;

const Modal = () => {
  const menus = ["Pricing", "Product", "About Us", "Careers", "Community"];

  return (
    <>
      <ModalContainer />
      <ModalMenu>
        <ul>
          {menus.map((menu, i) => (
            <li key={`${menu}-${i}`}>{menu}</li>
          ))}
        </ul>
      </ModalMenu>
    </>
  );
};

export default Modal;
