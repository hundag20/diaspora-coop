import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #00adef;
  font-weight: 600;
  color: #fff;
  padding: 16px 24px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1em;

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
      <StyledButton>
        {text}
        <i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i>
      </StyledButton>
    </a>
  );
};

export default MainButton;
