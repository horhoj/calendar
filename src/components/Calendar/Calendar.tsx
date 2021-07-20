import React from 'react';
import styled, { css } from 'styled-components';
import {
  getDayOfWeekFirstDayOfMonth,
  getDays,
  getLastDayOfMonth,
  LIST_OF_NAMES_OF_DAYS_OF_THE_WEEK,
  LIST_OF_NAMES_OF_MONTH,
} from './helpers';
import { CalendarProps } from './types';

const Wrap = styled.div`
  border: 1px solid #999;
  padding: 10px;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
`;

const DaysWrap = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
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

const Day = styled.button<{ isCurrent: boolean }>`
  cursor: pointer;
  background-color: ${({ isCurrent }) => (isCurrent ? 'red' : 'white')};
  outline-color: red;

  &:active {
    background-color: red;
  }
  ${dayCommonStyle}
`;

const Empty = styled.div``;

const MonthWrap = styled.div`
  text-align: center;
  font-weight: bold;
`;

export const Calendar: React.FC<CalendarProps> = ({ date, setDate }) => {
  const lastDayOfMonth = getLastDayOfMonth(date);
  const currentDayOfWeek = getDayOfWeekFirstDayOfMonth(date);
  const days: number[] = getDays(lastDayOfMonth);
  const empty: number[] = getDays(currentDayOfWeek - 1);

  const handleDateClkCreator = (day: number) => () => {
    const newDate = new Date(date.getFullYear(), date.getMonth(), day);
    setDate(newDate);
  };

  return (
    <Wrap>
      <MonthWrap>
        {LIST_OF_NAMES_OF_MONTH[date.getMonth()]} {date.getFullYear()}
      </MonthWrap>
      <DaysWrap>
        {LIST_OF_NAMES_OF_DAYS_OF_THE_WEEK.map((item) => (
          <DayColumn key={item}>{item}</DayColumn>
        ))}
        {empty.map((item) => (
          <Empty key={item} />
        ))}
        {days.map((day) => (
          <Day
            key={day}
            onClick={handleDateClkCreator(day)}
            isCurrent={date.getDate() === day}
          >
            {day}
          </Day>
        ))}
      </DaysWrap>
    </Wrap>
  );
};
