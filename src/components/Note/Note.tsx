import React from 'react';
import styled, { css } from 'styled-components';
import { TodoType } from '../../types/todo';
import { NoteDataEventType, NoteProps } from './types';

const Title = styled.div`
  font-weight: bold;
  color: dodgerblue;
  text-decoration: underline;
`;

const FieldTitle = styled.span`
  font-style: italic;
`;

const Field = styled.div``;

const actionButtonCommonStyle = css`
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  background-color: red;
  ${actionButtonCommonStyle}
`;

const UpdateBtn = styled.button`
  background-color: dodgerblue;
  ${actionButtonCommonStyle}
`;

const ActionWrap = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;
  right: 5px;
  top: 5px;
  padding: 5px;
  border-radius: 3px;
  background-color: #ddd;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease;
`;

const Wrap = styled.div`
  border: 1px solid #999;
  padding: 10px;
  border-radius: 5px;
  position: relative;

  &:hover {
    ${ActionWrap} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const Note: React.FC<NoteProps> = ({ data, sendEvent }) => {
  const handleActionBtnCreator = (type: NoteDataEventType) => () => {
    sendEvent({ id: data.id, type });
  };

  return (
    <Wrap>
      <ActionWrap>
        <UpdateBtn onClick={handleActionBtnCreator(NoteDataEventType.UPDATE)}>
          E
        </UpdateBtn>
        <DeleteBtn onClick={handleActionBtnCreator(NoteDataEventType.DELETE)}>
          D
        </DeleteBtn>
      </ActionWrap>
      <Title>{data.title}</Title>
      {data.type === TodoType.HOLIDAY ? (
        <Field>
          <FieldTitle>Бюджет:</FieldTitle> {data.budget}
        </Field>
      ) : null}

      {data.type === TodoType.EVENT ? (
        <>
          <Field>
            <FieldTitle>Адрес:</FieldTitle> {data.address}
          </Field>
          <Field>
            <FieldTitle>Время:</FieldTitle> {data.time}
          </Field>
        </>
      ) : null}

      {data.type === TodoType.NOTE ? <Field>{data.content}</Field> : null}
    </Wrap>
  );
};
