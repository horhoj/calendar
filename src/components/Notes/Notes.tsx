import React from 'react';
import styled from 'styled-components';
import { Note } from '../Note';
import { Todo } from '../../types/todo';
import { useAppSelector } from '../../store/hooks';
import { todoSelectors } from '../../store/todos';

const Wrap = styled.div`
  border: 1px solid #999;
  border-radius: 5px;
  padding: 10px;
`;

const Title = styled.div`
  font-weight: bold;
  text-align: center;
`;

const Content = styled.div`
  display: grid;
  grid-row-gap: 10px;
`;

export const Notes: React.FC = () => {
  const todos: Todo[] = useAppSelector(todoSelectors.getTodos);
  return (
    <Wrap>
      <Content>
        <Title>NoteList</Title>
        {todos.map((note) => (
          <Note data={note} key={note.id} />
        ))}
      </Content>
    </Wrap>
  );
};
