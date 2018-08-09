import * as type from '../constants';

let id = 1;
export const createTodo = text => ({
  type: type.createTodoItem,
  payload: {
    id: id++,
    text,
    completed: false,
  },
});

export const toggleTodo = (id, completed) => ({
  type: type.toggleTodoItem,
  payload: {
    id,
    completed,
  },
});

export const editTodo = (id, text) => ({
  type: type.editTodoItem,
  payload: {
    id,
    text,
    completed: false,
  },
});

export const deleteTodo = id => ({
  type: type.deleteTodoItem,
  payload: {
    id,
  },
});
