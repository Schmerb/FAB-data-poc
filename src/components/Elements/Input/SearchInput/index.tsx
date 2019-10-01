/**
 *
 * SearchInput
 *
 */

import React, { memo, useEffect, useRef } from 'react';
import styled from 'styled-components';

const SearchInput = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  onDeleteClick,
  ...rest
}: ISearchInputProps) => {
  const input = useRef<any>();

  useEffect(() => {
    input.current && input.current.focus();
  }, []);

  useEffect(() => {
    if (value === '') {
      // this handles re-focusing input when we clear text via onDeleteClick
      input.current && input.current.focus();
    }
  }, [value]);

  return (
    <Container>
      <StyledInput
        ref={input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      <IconWrapper hasText={!!value}>
        <button onClick={onDeleteClick}>x</button>
      </IconWrapper>
    </Container>
  );
};

interface ISearchInputProps {
  value?: any;
  type?: string;
  placeholder?: string;
  onChange?: (payload: any) => void;
  onDeleteClick?: (payload: any) => void;
}
export default memo(SearchInput);

const Container = styled.div`
  background-color: #fff;
  position: relative;
  height: 38px;
  padding-right: 32px;
  border-radius: 1px;
  border: 1px solid hsl(0, 0%, 80%);
`;

const StyledInput = styled.input`
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 2px 8px;
  border: none;
  border-radius: 1px;
  outline: none;
`;

interface IIconWrapperProps {
  hasText: boolean;
}

const IconWrapper = styled.div<IIconWrapperProps>`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  ${({ hasText, theme }) => theme.styles.showhideStyles(hasText)}
`;
