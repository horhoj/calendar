import React from 'react';
import styled from 'styled-components';
import { NoteProps } from '../Calendar/types';

const Wrap = styled.div`
  border: 1px solid #999;
  padding: 10px;
  border-radius: 5px;
`;

const Title = styled.div`
  font-weight: bold;
  color: dodgerblue;
  text-decoration: underline;
`;

const FieldTitle = styled.span`
  font-style: italic;
`;

const Field = styled.div``;

export const Note: React.FC<NoteProps> = ({ data }) => {
  return (
    <Wrap>
      <Title>{data.title}</Title>
      {data.budget ? (
        <Field>
          <FieldTitle>Бюджет:</FieldTitle> {data.budget}
        </Field>
      ) : null}

      {data.address ? (
        <Field>
          <FieldTitle>Адрес:</FieldTitle> {data.address}
        </Field>
      ) : null}
      {data.time ? (
        <Field>
          <FieldTitle>Время:</FieldTitle> {data.time}
        </Field>
      ) : null}
      {data.content ? <Field>{data.content}</Field> : null}
    </Wrap>
  );
};
