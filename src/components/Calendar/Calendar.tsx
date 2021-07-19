import React from 'react';
import styled, { css } from 'styled-components';
import { getDayColumns, getDays } from './helpers';

const Wrap = styled.div`
  border: 1px solid #999;
  padding: 10px;
  border-radius: 5px;
  max-width: 300px;
  margin: 0 auto;
  width: 100%;
`;

const DaysWrap = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 2px;
`;

const dayCommonStyle = css`
  border: 1px solid #999;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DayColumn = styled.div`
  background-color: #999;
  color: #fff;
  ${dayCommonStyle}
`;

const Day = styled.div`
  ${dayCommonStyle}
`;

const MonthWrap = styled.div`
  text-align: center;
  font-weight: bold;
`;

export const Calendar: React.FC = () => {
  const days: number[] = getDays();

  const dayColumns = getDayColumns();

  return (
    <Wrap>
      <MonthWrap>Maй 2021</MonthWrap>
      <DaysWrap>
        {dayColumns.map((item) => (
          <DayColumn key={item}>{item}</DayColumn>
        ))}
        {days.map((item) => (
          <Day key={item}>{item}</Day>
        ))}
      </DaysWrap>
    </Wrap>
  );
};
