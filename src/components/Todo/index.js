import React from 'react';
import { StyledText, StyledView, Footer } from './AppStyles';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import Button from '../Button';

const Todo = () => (
  <React.Fragment>
    <StyledView>
      <StyledText>ToDo</StyledText>
      <TodoForm />
      <TodoList />
    </StyledView>
    <Footer>
      <Button name="All" />
      <Button name="Completed" />
    </Footer>
  </React.Fragment>
);

export default Todo;
