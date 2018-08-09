import React from 'react';
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
  text-align: center;
`;

const Button = props => (
  <TouchableOpacity onPress={props.onPress}>
    <StyledText>{props.name}</StyledText>
  </TouchableOpacity>
);

export default Button;
