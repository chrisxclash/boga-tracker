import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  font-size: 12px;
  margin: 0 0 5px 3px;
  font-weight: bold;
`;

const StyledSelect = styled.select`
  -webkit-appearance: none;
  width: 100%;
  font-size: 14px;
  padding: 10px 15px;
  background: #232427;
  border: 1px solid #111;
  border-radius: 3px;
  box-shadow: none;
  color: #dcdcdc;
  outline: none;
  transition: background 300ms, border-color 300ms, padding 300ms;

  &:disabled {
    background: transparent;
    border-color: transparent;
    padding: 0;
  }
`;

const Select = ({ label, options, style, ...props }) => (
  <div style={style}>
    {label && <Label>{label}</Label>}
    <StyledSelect type="text" {...props}>
      {options.map(o => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </StyledSelect>
  </div>
);

export default Select;
