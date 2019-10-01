import React from 'react';
import styled from 'styled-components';

const Button = ({ children, ...props }: IButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

interface IButtonProps {
  [key: string]: any;
  children?: any;
}

export default Button;

const StyledButton = styled.button`
  color: #fff;
  background-color: #1976d2;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  ${({ theme }) => theme.styles.boxShadows[1]};

  &:hover {
    background-color: #2196f3;
  }
`;
