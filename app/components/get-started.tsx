import React from "react";
import styled from "@emotion/styled";

const GetStartedButton = styled.button`
  width: 120px;
  height: 40px;
  padding: 0.1rem;
  color: ${(props) => props.theme.colors.neutral.veryLightGray};
  background-color: ${(props) => props.theme.colors.primary.brightRed};
  border: none;
  border-radius: 20px;
  box-shadow: 0px 10px 13px -7px ${(props) => props.theme.colors.primary.brightRed};

  &:hover {
    cursor: pointer;
    transform: translateY(1px);
  }
`;

const GetStarted = () => {
  return <GetStartedButton>get started</GetStartedButton>;
};

export default GetStarted;
