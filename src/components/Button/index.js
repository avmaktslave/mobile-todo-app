import React from 'react';
import { string, func } from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const StyledText = styled.Text`
  font-size: 25px;
  width: 150px;
  font-style: italic;
  font-weight: bold;
  background-color: #6889f0;
  border-radius: 15px;
  padding: 10px;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
  text-align: center;
`;

const Button = ({ name, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <StyledText>{name}</StyledText>
  </TouchableOpacity>
);

Button.propTypes = {
  name: string.isRequired,
  onPress: func,
};

Button.defaultProps = {
  onPress: () => {},
};

export default Button;
