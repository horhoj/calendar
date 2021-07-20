import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NotesPage } from './pages/NotesPage';
import { NotePage } from './pages/NotePage';
import { todoListRoutes } from './routes';

const Container = styled.div`
  max-width: 1024px;
  min-width: 300px;
  width: 100%;
  margin: 0 auto 0;
  padding: 10px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

export const App: React.FC = () => {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route path={todoListRoutes.LIST} exact={true}>
            <NotesPage />
          </Route>
          <Route path={todoListRoutes.ADD} exact={true}>
            <NotePage />
          </Route>
          <Route path={todoListRoutes.EDIT} exact={true}>
            <NotePage />
          </Route>
          <Route path={'*'}>
            <div>NotFound</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
};
