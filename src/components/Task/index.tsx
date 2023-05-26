import * as React from "react";
import { ButtonTouch, Card, Container, Icon } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { CheckBox } from "../CheckBox";
interface IAfazer{
    tarefa:string;
    concluido: boolean;
}
interface IPropsTask {
    tarefa:IAfazer;
    deleteTask: (tarefa:IAfazer) => void;
    handleCheck: (tarefa: IAfazer) => void;
}


function TaskComponent({ tarefa, deleteTask, handleCheck }: IPropsTask) {
    return (
        <Container>
            <Card>
                <CheckBox 
                    tarefa={tarefa}
                    handleCheck={handleCheck}
                />

                <ButtonTouch
                    onPress={() => {
                        deleteTask(tarefa);
                    }}
                    onLongPress={()=>{
                        console.log('esta muito pensativo')
                    }}
                >
                    <Icon name="trash-2" size={RFValue(25)}/>
                </ButtonTouch>
            </Card>
        </Container>
    );
}

export const Task = React.memo(TaskComponent);