import React from 'react';
import styled from 'styled-components'; // If you are using styled-components

const Button = ({ children, onClick, bgColor, color, fontSize, borderColor, hoverColor }) => {
    return (
        <StyledButton
            onClick={onClick}
            bgColor={bgColor}
            color={color}
            fontSize={fontSize}
            borderColor={borderColor}
            hoverColor={hoverColor}
        >
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button`
  width: 40%;
  margin: 10px 0;
  padding: 15px 20px;
  background-color: ${(props) => props.bgColor || 'blue'};
  color: ${(props) => props.color || 'white'};
  border: 2px solid ${(props) => props.borderColor || '#82D45B'};
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: transparent;
    color: ${(props) => props.hoverColor || '#82D45B'};
  }
`;

export default Button;
