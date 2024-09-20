import React from 'react';
import styled from 'styled-components'; // If you are using styled-components

const Button = ({ children, onClick, bgcolor, color, fontSize, bordercolor, hovercolor }) => {
    return (
        <StyledButton
            onClick={onClick}
            bgcolor={bgcolor}
            color={color}
            fontSize={fontSize}
            bordercolor={bordercolor}
            hovercolor={hovercolor}
        >
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button`
  width: 100%;
  margin: 10px 0;
  padding: 15px 20px;
  background-color: ${(props) => props.bgcolor || 'blue'};
  color: ${(props) => props.color || 'white'};
  border: 2px solid ${(props) => props.bordercolor || '#82D45B'};
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: transparent;
    color: ${(props) => props.hovercolor || '#82D45B'};
  }
`;

export default Button;
