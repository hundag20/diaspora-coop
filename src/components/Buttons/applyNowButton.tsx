import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledButton = styled.button`
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1em;

  padding: 21px 55px 21px 55px;
  font-family: "Lato", Sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #ee7b28;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: #ffcc03;
  border-radius: 50px 50px 50px 50px;
  box-shadow: 19px 19px 40px 0px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: black;
  }
`;

interface ButtonProps {
  text: string;
  link: string;
  target: string;
}

const ApplyNowButton: React.FC<ButtonProps> = ({ text, link, target }) => {
  return (
    <Link to={link} target={target}>
      <StyledButton>{text}</StyledButton>
    </Link>
  );
};

export default ApplyNowButton;
