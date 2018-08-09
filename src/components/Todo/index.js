import React from 'react';
import { StyledText, StyledView } from './AppStyles';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

const Todo = () => (
  <StyledView>
    <StyledText>ToDo</StyledText>
    <TodoForm />
    <TodoList />
  </StyledView>
);

export default Todo;
