import React from 'react';
import { string, func } from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { StyledButton } from './StyledButton';

const EditButton = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress}>
    <StyledButton text={text}>{text}</StyledButton>
  </TouchableOpacity>
);

EditButton.propTypes = {
  text: string.isRequired,
  onPress: func.isRequired,
};

export default EditButton;
