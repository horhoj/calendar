import React from 'react';
import styled from 'styled-components';
import { generatePath, useHistory } from 'react-router-dom';
import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { todoListActions, todoListSelectors } from '../../store/todoList';
import { getDateStr } from '../../helpers';
import { todoListRoutes } from '../../routes';

export const Nav: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector(todoListSelectors.getDate);
  const currentDateValue = new Date(currentDate);
  const history = useHistory();

  const handleAddBtnClk = () => {
    const path = generatePath(todoListRoutes.ADD);
    history.push(path);
  };

  const handleChangeDate = (newDate: Date) => {
    const dateStr = getDateStr(newDate);
    dispatch(todoListActions.setCurrentDate(dateStr));
  };

  return (
    <Wrap>
      <Content>
        <Title>Навигация</Title>
        <DateInput date={currentDateValue} setDate={handleChangeDate} />
        <Calendar date={currentDateValue} setDate={handleChangeDate} />
        <AddBtn onClick={handleAddBtnClk}>Добавить</AddBtn>
      </Content>
    </Wrap>
  );
};

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

const AddBtn = styled.button`
  padding: 10px;
  border: none;
  background-color: #999;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  &:active {
    opacity: 0.6;
  }
`;
