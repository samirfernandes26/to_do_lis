
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native-paper'

export const Container = styled.View`
    background-color:${({theme}) => theme.colors.gray_100};
    width: ${RFValue(100)}px;
    height: ${RFValue(100)}px;
`;


export const Test = styled.Text`
    color: '#008000';
    size: ${RFValue(50)}px;
`;

export const ImputPaper = styled(TextInput)`
  
`;
