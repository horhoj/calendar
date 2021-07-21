import React from 'react';
import styled from 'styled-components';
import { useHistory, generatePath } from 'react-router-dom';
import { Note } from '../Note';
import { Todo } from '../../types/todo';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { todoActions, todoSelectors } from '../../store/todos';
import { NoteDataEvent, NoteDataEventType } from '../Note/types';
import { todoListRoutes } from '../../routes';

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

  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleNoteSendEvent = (event: NoteDataEvent) => {
    if (event.type === NoteDataEventType.DELETE && confirm('Удалить?')) {
      dispatch(todoActions.deleteTodo(event.id));
      return;
    }
    if (event.type === NoteDataEventType.UPDATE) {
      const path = generatePath(todoListRoutes.EDIT, { id: event.id });
      history.push(path);
    }
  };

  return (
    <Wrap>
      <Content>
        <Title>Список заметок</Title>
        {todos.map((note) => (
          <Note data={note} key={note.id} sendEvent={handleNoteSendEvent} />
        ))}
        {todos.length === 0 ? 'Нет заметок. Нажмите кнопку добавить' : null}
      </Content>
    </Wrap>
  );
};
