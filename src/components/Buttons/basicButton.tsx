import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  padding: 12px 20px;
  border: 2px solid #17a8e3;

  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  font-family: inherit;
  font-weight: 500;
  background-color: #17a8e3;
  color: #ffffff;

  &:hover {
    background-color: #00adef;
    color: white;
  }
`;

interface ButtonProps {
  text: string;
  link: string;
}

const BasicButton: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <a href={link}>
      <StyledButton>{text}</StyledButton>
    </a>
  );
};

export default BasicButton;
