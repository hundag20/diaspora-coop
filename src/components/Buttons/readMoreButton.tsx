import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledButton = styled.button`
  background-color: white;
  font-weight: 600;
  color: #00adef;
  padding: 12px 20px;
  border: 2px solid #00adef;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  font-size: 13px;
  line-height: 13px;
  text-align: center;

  &:hover {
    background-color: #00adef;
    color: white;
  }
`;

interface ButtonProps {
  text: string;
  link: string;
  target: string;
}

const ReadMoreButton: React.FC<ButtonProps> = ({ text, link, target }) => {
  return (
    <Link to={link} target={target}>
      <StyledButton>{text}</StyledButton>
    </Link>
  );
};

export default ReadMoreButton;
