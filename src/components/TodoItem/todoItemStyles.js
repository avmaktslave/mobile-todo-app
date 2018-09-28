import styled from 'styled-components';

export const Wrap = styled.View``;

export const TodoText = styled.Text`
  font-size: 26px;
  font-weight: bold;
  border-radius: 10px
  margin: 5px;
  padding: 10px;
  background-color: ${({ done }) => (!done ? 'aliceblue' : 'aquamarine')};
  text-align: center;
  text-align-vertical: center;
  text-decoration-line: ${({ done }) => (done ? 'line-through' : 'none')};
`;

export const EditWrap = styled.View`
  align-items: center;
`;

export const ButtonWrap = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const EditText = styled.TextInput`
  min-height: 100px;
  min-width: 300px;
  font-size: 26px;
  font-weight: bold;
  border-radius: 10px;
  margin: 5px;
  padding: 10px;
  background-color: ivory;
  text-align: center;
  text-align-vertical: center;
`;
