import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes, { shape } from 'prop-types';
import TodoItem from '../TodoItem';

const TodoList = ({ todos }) => (
  <FlatList
    data={todos}
    keyExtractor={item => item.id.toString()}
    renderItem={({ item }) => (
      <TodoItem text={item.text} id={item.id} completed={item.completed} />
    )}
  />
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(shape().isRequired).isRequired,
};

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(TodoList);
