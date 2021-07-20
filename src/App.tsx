import React from 'react';
import styled from 'styled-components';
import { Nav } from './components/Nav';
import { Notes } from './components/Notes';

const Container = styled.div`
  max-width: 1024px;
  min-width: 300px;
  width: 100%;
  margin: 0 auto 0;
  padding: 10px;
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  min-height: 100vh;
  @media (max-width: 799px) {
    & {
      grid-template-columns: 1fr;
    }
  } ;
`;

export const App: React.FC = () => {
  return (
    <Container>
      <Nav />
      <Notes />
    </Container>
  );
};
