import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TodoForm } from '../../components/TodoForm';
import { useAppSelector } from '../../store/hooks';
import { todoSelectors } from '../../store/todos';

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

export const NotePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const currentDate = useAppSelector<string>(todoSelectors.getDate);
  return (
    <Wrap>
      <TodoForm id={Number(id)} currentDate={currentDate} />
    </Wrap>
  );
};
