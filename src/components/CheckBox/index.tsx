import React, { useEffect, useState } from 'react';

import { useTheme } from 'styled-components';
import { Container, PaperCheckbox } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

interface IAfazer{
    tarefa:string;
    concluido: boolean;
}
interface IPropsTask{
    tarefa:IAfazer;
    handleCheck: ( tarefa:IAfazer ) => void;
}


export function CheckBox({ tarefa, handleCheck }:IPropsTask) {

    const theme = useTheme();
    
    return (
        <Container>
            {!tarefa.concluido && 
                <PaperCheckbox
                    status={tarefa.concluido ? 'checked' : 'unchecked'}
                    onPress={() => { handleCheck(tarefa)}}
                    label= {tarefa.tarefa} 
                    labelStyle={{ 
                        fontSize: RFValue(14), 
                        color: theme.colors.gray_100,
                        fontFamily: theme.fonts.regular,
                        textAlign:'left',
                        marginLeft: RFValue(12),
                    }}
                    style={{
                        minHeight: RFValue(60),
                        borderRadius: RFValue(15),
                        
                    }}
                    mode='android'
                    position='leading'
                    color = {theme.colors.purple_dark}
                    uncheckedColor = {theme.colors.blue_dark}
                    disabled={false}
                    
                />
            }
            {tarefa.concluido && 
                <PaperCheckbox
                    status={tarefa.concluido ? 'checked' : 'unchecked'}
                    onPress={() => { handleCheck(tarefa)}}
                    label= {tarefa.tarefa} 
                    labelStyle={{ 
                        fontSize: RFValue(14), 
                        color: theme.colors.gray_300,
                        fontFamily: theme.fonts.regular,
                        textAlign:'left',
                        marginLeft: RFValue(12),
                        textDecorationLine: 'line-through',            
                    }}
                    style={{
                        minHeight: RFValue(60),
                        borderRadius: RFValue(15),                        
                    }}
                    mode='android'
                    position='leading'
                    color = {theme.colors.purple_dark}
                    uncheckedColor = {theme.colors.blue_dark}
                    disabled={false}
                    
                />
            }
        </Container>
    );
}
