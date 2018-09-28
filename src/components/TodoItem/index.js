import React from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import { func, string, number, bool } from 'prop-types';
import { deleteTodo, editTodo, toggleTodo } from '../../actions/todoAction';
import {
  TodoText,
  Wrap,
  EditText,
  EditWrap,
  ButtonWrap,
} from './todoItemStyles';
import EditButton from '../EditButton';

class TodoItem extends React.Component {
  static propTypes = {
    text: string.isRequired,
    id: number.isRequired,
    completed: bool.isRequired,
    editTodo: func.isRequired,
    toggleTodo: func.isRequired,
    deleteTodo: func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      editingText: props.text,
      isShown: false,
    };
  }

  onEdit = () => {
    const { isShown } = this.state;
    this.setState({ isShown: !isShown });
  };

  editHandler = editingText => this.setState({ editingText });

  saveEditedText = () => {
    const { editTodo, id } = this.props;
    const { editingText } = this.state;
    editTodo(id, editingText);
    this.setState({ isShown: false });
  };

  render() {
    const { text, id, deleteTodo, toggleTodo, completed } = this.props;
    const { isShown, editingText } = this.state;
    return (
      <React.Fragment>
        <TouchableOpacity onPress={() => toggleTodo(id, completed)}>
          <Wrap>
            <TodoText done={completed}>{text}</TodoText>
          </Wrap>
        </TouchableOpacity>
        {isShown && (
          <EditWrap>
            <EditText
              onChangeText={this.editHandler}
              defaultValue={editingText}
            />
            <EditButton text="Save" onPress={this.saveEditedText} />
          </EditWrap>
        )}
        <ButtonWrap>
          <EditButton text="Edit" onPress={this.onEdit} />
          <EditButton text="Delete" onPress={() => deleteTodo(id)} />
        </ButtonWrap>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  editTodo,
  deleteTodo,
  toggleTodo,
};

export default connect(
  null,
  mapDispatchToProps,
)(TodoItem);
