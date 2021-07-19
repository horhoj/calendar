import React from 'react';
import styled from 'styled-components';
import { Note } from '../Note';

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
  return (
    <Wrap>
      <Content>
        <Title>NoteList</Title>
        <Note data={{ title: 'День рождения собаки', budget: '300$' }} />
        <Note
          data={{ title: 'Пьянка у соседа', address: '309 кв.', time: '13:59' }}
        />
        <Note
          data={{
            title: 'Заметочка',
            content: 'По дороге после  работы купить хлеба',
          }}
        />
      </Content>
    </Wrap>
  );
};
