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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #0056b3;
  }

  /* Media query for smaller screens */
  @media (max-width: 450px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;

interface ButtonProps {
  text: string;
  link: string;
}

const MainButton: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <a href={link} target="_blank">
      <StyledButton>
        {text}
        <i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i>
      </StyledButton>
    </a>
  );
};

export default MainButton;
