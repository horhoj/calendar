import React from 'react';
import styled, { css } from 'styled-components';
import {
  getDayOfWeekFirstDayOfMonth,
  getDays,
  getLastDayOfMonth,
  LIST_OF_NAMES_OF_DAYS_OF_THE_WEEK,
  LIST_OF_NAMES_OF_MONTH,
} from '../../helpers';
import { useAppSelector } from '../../store/hooks';
import { todoListSelectors } from '../../store/todoList';
import { CalendarProps } from './types';
import { checkIsToday, getTheNumberOfCasesByDate } from './helpers';

export const Calendar: React.FC<CalendarProps> = ({ date, setDate }) => {
  const todoList = useAppSelector(todoListSelectors.getTodoList);
  const lastDayOfMonth = getLastDayOfMonth(date);
  const currentDayOfWeek = getDayOfWeekFirstDayOfMonth(date);
  const days: number[] = getDays(lastDayOfMonth);
  const empty: number[] = getDays(currentDayOfWeek - 1);

  const handleDateClkCreator = (day: number) => () => {
    const newDate = new Date(date.getFullYear(), date.getMonth(), day);
    setDate(newDate);
  };

  const dayCount = (day: number) => {
    const count = getTheNumberOfCasesByDate(
      day,
      date.getMonth(),
      date.getFullYear(),
      todoList,
    );
    //если дел слишком много, более 99 то выводим 99, что бы не ломать верстку
    return count > 0 ? <DayCount>{count > 99 ? 99 : count}</DayCount> : null;
  };

  const isToday = (day: number) => {
    const currentDate = new Date();
    return checkIsToday(day, date.getMonth(), date.getFullYear(), currentDate);
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
          <DayWrap key={day}>
            <Day
              key={day}
              today={isToday(day)}
              onClick={handleDateClkCreator(day)}
              isCurrent={date.getDate() === day}
            >
              {day}
            </Day>
            {dayCount(day)}
          </DayWrap>
        ))}
      </DaysWrap>
    </Wrap>
  );
};

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
  grid-column-gap: 7px;
  grid-row-gap: 7px;
`;

const dayCommonStyle = css`
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DayColumn = styled.div`
  background-color: #999;
  color: #fff;
  border: 1px solid #999;

  ${dayCommonStyle}
`;

const Day = styled.button<{ isCurrent: boolean; today: boolean }>`
  cursor: pointer;
  background-color: ${({ isCurrent }) => (isCurrent ? 'red' : 'white')};
  ${({ isCurrent }) => (isCurrent ? 'color: white' : '')};

  outline-color: red;
  display: flex;
  flex-grow: 1;

  font-weight: ${({ today }) => (today ? 700 : 400)};

  &:active {
    background-color: red;
  }

  border: ${({ today }) => (today ? '2px solid dodgerblue' : '1px solid #999')};
  ${dayCommonStyle}
`;

const DayWrap = styled.div`
  display: flex;
  position: relative;
`;

const DayCount = styled.div`
  background-color: green;
  height: 15px;
  width: 15px;
  position: absolute;
  font-size: 0.6rem;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0;
  padding: 0;
  line-height: 1rem;
  border-radius: 50%;
  bottom: -5px;
  right: -5px;
  color: white;
`;

const Empty = styled.div``;

const MonthWrap = styled.div`
  text-align: center;
  font-weight: bold;
`;
