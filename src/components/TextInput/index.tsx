import React from 'react';
import { Container, PaperImput } from "./styles";
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInputProps} from 'react-native-paper';

interface IProps extends TextInputProps{
}

export function Input({...rest}) {
    const theme = useTheme();
    
    return (
        <Container>
            <PaperImput
                {...rest}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor={theme.colors.gray_300}
                style = {{backgroundColor: theme.colors.gray_500, height:RFValue(52), color: theme.colors.gray_100}}
                outlineColor={theme.colors.gray_600}
                activeOutlineColor={theme.colors.purple_dark}
                mode = 'outlined'

            />
        </Container>
    );
}
