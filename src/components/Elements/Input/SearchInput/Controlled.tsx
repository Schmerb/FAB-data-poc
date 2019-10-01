/**
 *
 * Controlled Search Input
 *
 */

import React, { useState } from 'react';
// import styled from 'styled-components';

import SearchInput from './index';

const Controlled = ({
  onValueChange,
  placeholder,
  ...rest
}: IControlledProps) => {
  const [value, setValue] = useState('');
  return (
    <SearchInput
      {...rest}
      value={value}
      placeholder={placeholder}
      onChange={(evt: any) => {
        const newVal = evt.target.value;
        setValue(newVal);
        onValueChange && onValueChange(newVal);
      }}
      onDeleteClick={() => {
        setValue('');
        onValueChange && onValueChange('');
      }}
    />
  );
};

interface IControlledProps {
  [key: string]: any;
  placeholder?: string;
  onValueChange?: (value: string) => void;
}

export default Controlled;
