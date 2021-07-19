import React from 'react';
import styled from 'styled-components';
import { DateInputProps } from './types';
import { getDateStr } from './helpers';

const Input = styled.input`
  border: 1px solid #999;
  border-radius: 5px;
  padding: 10px;
  max-width: 300px;
  margin: 0 auto;
`;

export const DateInput: React.FC<DateInputProps> = ({ date, setDate }) => {
  const dateValue = getDateStr(date);

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate: Date = new Date(e.target.value);
    setDate(newDate);
  };

  return <Input type="date" value={dateValue} onChange={handleChangeDate} />;
};
