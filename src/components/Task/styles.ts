import { RFValue } from "react-native-responsive-fontsize";
import Feather from "react-native-vector-icons/Feather";
import styled, { css } from "styled-components/native";
import { Button } from "react-native-paper";

export const Container = styled.View`
    width: 100%;
    padding: ${RFValue(8)}px;
`;

export const Card = styled.View`
    background-color: ${({ theme }) => theme.colors.gray_500};
    border-radius: ${RFValue(16)}px;
    min-height: ${RFValue(60)}px;
    align-items: center;
    flex-direction: row;
    padding-right: ${RFValue(8)}px;
    border-width: ${RFValue(2)}px;
    border-color: ${({ theme }) => theme.colors.gray_400};
`;

export const Icon = styled(Feather)`
    
    color: ${({ theme }) => theme.colors.gray_300};
`;

export const ButtonTouch = styled.TouchableOpacity`
    width: auto;
    min-height: ${RFValue(60)}px;
    align-items: center;
    justify-content: center;
`;
