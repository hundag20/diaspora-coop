import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #00adef;
  font-weight: bold;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

interface ButtonProps {
  text: string;
  link: string;
}

const MainButton: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <a href={link}>
      <StyledButton>{text}</StyledButton>
    </a>
  );
};

export default MainButton;
