import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import Button from 'react-native-button';
import { func, string, number, bool } from 'prop-types';
import { deleteTodo, editTodo, toggleTodo } from '../../actions/todoAction';

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#69b9f0',
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    margin: 5,
  },
  text: {},
  editText: {
    minHeight: 100,
    minWidth: 300,
    fontSize: 26,
    fontWeight: 'bold',
    borderRadius: 10,
    margin: 5,
    padding: 10,
    backgroundColor: 'ivory',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  activeTitle: {
    color: 'red',
  },
});

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
    const { text } = this.props;
    this.state = {
      editingText: text,
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
          <View>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 'bold',
                borderRadius: 10,
                margin: 5,
                padding: 10,
                backgroundColor: !completed ? 'aliceblue' : 'aquamarine',
                textAlign: 'center',
                textAlignVertical: 'center',
                textDecorationLine: completed ? 'line-through' : 'none',
              }}
            >
              {text}
            </Text>
          </View>
        </TouchableOpacity>
        {isShown && (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TextInput
              style={styles.editText}
              onChangeText={this.editHandler}
              defaultValue={editingText}
            />
            <Button
              style={styles.button}
              styleDisabled={{ color: 'red' }}
              onPress={this.saveEditedText}
            >
              Save
            </Button>
          </View>
        )}
        <View
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
        >
          <Button
            style={styles.button}
            styleDisabled={{ color: 'red' }}
            onPress={this.onEdit}
          >
            Edit
          </Button>
          <Button
            style={styles.button}
            styleDisabled={{ color: 'red' }}
            onPress={() => deleteTodo(id)}
          >
            Delete
          </Button>
        </View>
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
