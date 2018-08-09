import React from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { createTodo } from '../../actions/todoAction';
import Button from '../Button';

class TodoForm extends React.Component {
  static propTypes = {
    createTodo: func.isRequired,
  };

  state = {
    text: '',
  };

  changeHandler = text => this.setState({ text });

  AddTodo = () => {
    const { text } = this.state;
    const { createTodo } = this.props;
    if (!text) return;
    createTodo(text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <React.Fragment>
        <TextInput
          style={{
            borderBottomWidth: 3,
            borderBottomColor: '#6889f0',
            width: 300,
            marginBottom: 10,
            fontSize: 25,
          }}
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
)(TodoForm);
