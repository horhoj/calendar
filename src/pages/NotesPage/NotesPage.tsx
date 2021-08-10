import React from 'react';
import styled from 'styled-components';
import { Nav } from '../../components/Nav';
import { Notes } from '../../components/Notes';

export const NotesPage: React.FC = () => {
  return (
    <Wrap>
      <Nav />
      <Notes />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  @media (max-width: 799px) {
    & {
      grid-template-columns: 1fr;
    }
  } ;
`;
