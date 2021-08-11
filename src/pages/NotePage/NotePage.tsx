import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TodoForm } from '../../components/TodoForm';
import { useAppSelector } from '../../store/hooks';
import { todoListSelectors } from '../../store/todoList';

export const NotePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const currentDate = useAppSelector<string>(todoListSelectors.getDate);
  return (
    <Wrap>
      <TodoForm id={Number(id)} currentDate={currentDate} />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;
