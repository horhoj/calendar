import React from 'react';
import styled from 'styled-components';
import { Calendar } from '../Calendar';
import { DateInput } from '../DateInput';

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
  return (
    <Wrap>
      <Content>
        <Title>Navigation</Title>
        <DateInput />
        <Calendar />
      </Content>
    </Wrap>
  );
};
