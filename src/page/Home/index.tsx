import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
    Container,
    Body,
    Header,
    ContainerPesquisa,
    Icon,
    SubHeader,
    TextSubHeader,
    ContainerTexts,
    TextContadorSubHeader,
    ContantVazia,
    Icon_2,
    TextContanVazio,
    ButtonTouch,
    Logo,
} from "./styles";
import { Input } from "../../components/TextInput";
import { Task } from "../../components/Task";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { Alert, FlatList, StatusBar } from "react-native";

interface IAfazer {
    tarefa: string;
    concluido: boolean;
}

export function HomeScreen() {
    const theme = useTheme();
    const [text, setText] = useState("");
    const [afazeres, setAfazeres] = useState<IAfazer[]>([]);
    const [concluidas, setconcluidas] = useState<number>(0);

    function handleParticipantAdd(item: string) {

        if (item.length < 3) {
            return Alert.alert(
                "Atenção",
                "Sua tarefa deve ter ao menos 3 caracteres!"
            );
        }

        if (!!afazeres.find((tarefa) => tarefa.tarefa === item)) {
            return Alert.alert(
                "Tarefa ja existente",
                "Você já adicionou estárefa!"
            );
        }
        const novaTarefa: IAfazer = { tarefa: item, concluido: false };

        setAfazeres((prevState) => [...prevState, novaTarefa]);
    }

    function deleteItemTask(tarefa: IAfazer) {
        const filtradoAfazeres = afazeres.filter((_tarefa) => _tarefa.tarefa != tarefa.tarefa);

        setAfazeres((prevState) => filtradoAfazeres);
    }

    const handlerChatTask = useCallback((tarefa: IAfazer) => {
        const index = afazeres.findIndex(_tarefa => _tarefa.tarefa === tarefa.tarefa);
        afazeres[index].concluido = !tarefa.concluido;
        setAfazeres([...afazeres]);
    }, [])

    return (
        <Container>
            <StatusBar backgroundColor={theme.colors.gray}
                translucent
                animated
                barStyle='light-content'
                networkActivityIndicatorVisible
                hidden={false}
            />

            <Header>
                <Logo
                    source={require('../../assets/Logo.png')}
                    alt='Logo do aplicativo to do list'
                    progressiveRenderingEnabled = {true}
                    resizeMethod ='scale'
                />
            </Header>

            <Body>
                <ContainerPesquisa>
                    <Input
                        value={text}
                        onChangeText={(text) => setText(text)}
                    />
                    <ButtonTouch
                        onPress={() => handleParticipantAdd(text)}
                        labelStyle={{
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        contentStyle={{
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        style={{
                            backgroundColor: "#000",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Icon name="plus-circle" size={RFValue(25)} />
                    </ButtonTouch>
                </ContainerPesquisa>

                <SubHeader>
                    <ContainerTexts>
                        <TextSubHeader color={theme.colors.blue}>
                            Criadas
                        </TextSubHeader>
                        <TextContadorSubHeader>{afazeres.length}</TextContadorSubHeader>
                    </ContainerTexts>

                    <ContainerTexts>
                        <TextSubHeader color={theme.colors.purple_dark}>
                            Concluidas
                        </TextSubHeader>

                        <TextContadorSubHeader>{afazeres.filter((tarefa)=> tarefa.concluido === true).length}</TextContadorSubHeader>
                    </ContainerTexts>
                </SubHeader>

                {afazeres.length > 0 && (
                    <FlatList
                        data={afazeres}
                        keyExtractor={(item, index) => `${index}`}
                        renderItem={({ item }) => (
                            <>
                                <Task
                                    tarefa={item}
                                    deleteTask={(tarefa) =>
                                        deleteItemTask(tarefa)
                                    }
                                    handleCheck={(tarefa) =>
                                        handlerChatTask(tarefa)
                                    }
                                />
                            </>
                        )}
                    />
                )}

                {afazeres.length === 0 && (
                    <ContantVazia>
                        <Icon_2
                            name="clipboard-text-outline"
                            size={RFValue(90)}
                        />
                        <TextContanVazio textBold={true}>
                            Você ainda não tem tarefas cadastradas
                        </TextContanVazio>
                        <TextContanVazio textBold={false}>
                            Crie tarefas e organize seus itens a fazer
                        </TextContanVazio>
                    </ContantVazia>
                )}
            </Body>
        </Container>
    );
}
