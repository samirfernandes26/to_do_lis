import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RFValue } from "react-native-responsive-fontsize";

import styled from 'styled-components/native';

interface ITextVazio{
    textBold: boolean;
}

interface ITextSubHeader{
    color: string;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(130)}px;
    align-items: center;
    justify-content: center;
    padding: ${RFValue(20)}px;l
`;

export const Logo = styled.Image`
    width: ${RFValue(165)}px;
    height: ${RFValue(45)}px;
`;

export const Body = styled.View`
    flex: 1;
    padding: 0 ${RFValue(16)}px;
    background-color: ${({ theme }) => theme.colors.gray_600};
    width: 100%;
    height: 100%;
    border-top-left-radius: ${RFValue(25)}px;
    border-top-right-radius: ${RFValue(25)}px;
    align-items: center;
`;

export const ContainerPesquisa = styled.View`
    width: 80%;
    height: auto;
    flex-direction: row;
    margin-top: ${RFValue(-29)}px;
    align-items: flex-end;
`;

export const ButtonTouch = styled.TouchableOpacity`
    width: auto;
    height: ${RFValue(52)}px;
    width: ${RFValue(52)}px;
    border-radius: ${RFValue(8)}px;
    margin-left: ${RFValue(16)}px;
    padding: ${RFValue(4)}px;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.gray_100};
`;

export const Icon_2 = styled(MaterialCommunityIcons)`
    color: ${({ theme }) => theme.colors.gray_300};
`;

export const SubHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: ${RFValue(12)}px;
    margin-top: ${RFValue(24)}px;
    padding-bottom: ${RFValue(12)}px;
    width: 95%;
    border-bottom-width: ${RFValue(1.5)}px;
    border-color: ${({ theme }) => theme.colors.gray_300};
`;

export const ContainerTexts = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextSubHeader = styled.Text<ITextSubHeader>`
    font-family: ${({ theme }) => theme.fonts.black};
    font-size: ${RFValue(20)}px;

    ${({ color }, ) => color &&  css`
        color: ${color};
    `}
`;

export const TextContadorSubHeader = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    margin-left: ${RFValue(8)}px;
    background-color: ${({ theme }) => theme.colors.gray_400};
    color: ${({ theme }) => theme.colors.gray_200};
    width: ${RFValue(25)}px;
    height: ${RFValue(20)}px;
    border-radius: ${RFValue(10)}px;
    text-align: center;
`;

export const ContantVazia = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(40)}px;
`;

export const TextContanVazio = styled.Text<ITextVazio>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.gray_300};

    ${({ textBold }, ) => textBold &&  css`
        font-family: ${({ theme }) => theme.fonts.black};
        font-size: ${RFValue(20)}px;
    `}
`;
