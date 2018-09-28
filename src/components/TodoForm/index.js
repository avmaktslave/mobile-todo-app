import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { func } from 'prop-types';
import { createTodo } from '../../actions/todoAction';
import { Input } from './Input';
import Button from '../Button';

class TodoForm extends React.Component {
  static propTypes = {
    createTodo: func.isRequired,
    reset: func.isRequired,
  };

  state = {
    text: '',
  };

  changeHandler = text => this.setState({ text });

  AddTodo = () => {
    const { text } = this.state;
    const { createTodo, reset } = this.props;
    if (!text) return;
    createTodo(text);
    reset('todo');
  };

  render() {
    return (
      <React.Fragment>
        <Field
          name="todo"
          component={Input}
          onChangeText={this.changeHandler}
        />
        <Button name="Add Todo" onPress={this.AddTodo} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  createTodo,
};

export default connect(
  null,
  mapDispatchToProps,
)(reduxForm({ form: 'todo' })(TodoForm));
