/**
 *
 * Input
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

const Input = ({
  type = 'text',
  value,
  placeholder,
  onChange,
  ...rest
}: IInputProps) => (
  <StyledInput
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    {...rest}
  />
);

interface IInputProps {
  type?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  onChange?: (evt: any) => void;
}

export default memo(Input);

const StyledInput = styled.input`
  /* width: 100%; */
  height: 38px;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 1px;
  padding: 2px 8px;
  outline: none;
`;
