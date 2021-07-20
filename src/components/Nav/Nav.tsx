import React from 'react';
import styled from 'styled-components';
import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { todoActions, todoSelectors } from '../../store/todos';
import { getDateStr } from '../../helpers/getDateStr';

const Wrap = styled.div`
  border: 1px solid #999;
  padding: 10px;
  border-radius: 5px;
`;

const Title = styled.div`
  font-weight: bold;
  text-align: center;
`;

const Content = styled.div`
  display: grid;
  grid-row-gap: 10px;
`;

export const Nav: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(todoSelectors.getDate);
  const currentDateValue = new Date(currentDate);

  const handleChangeDate = (newDate: Date) => {
    const dateStr = getDateStr(newDate);
    dispatch(todoActions.setCurrentDate(dateStr));
  };

  return (
    <Wrap>
      <Content>
        <Title>Navigation</Title>
        <DateInput date={currentDateValue} setDate={handleChangeDate} />
        <Calendar date={currentDateValue} setDate={handleChangeDate} />
      </Content>
    </Wrap>
  );
};
