import React, { useState } from "react";
import {
    CloseButtonArea,
    ConfirmButton,
    Container,
    IconArea,
    InputComponent,
    IteractiveArea,
    Message,
    ModalArea,
    TopArea
} from "./styles";
import { IoMdClose } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";

type InputModalProps = {
    message: string;
    visible: boolean;
    closeModal: () => void;
    onClick: (input: string) => void;
}

export const InputModal = ({
    closeModal,
    message,
    onClick,
    visible,
}: InputModalProps): JSX.Element => {
    
    const [inputMessage, setInputMessage] = useState('');

    return (
        <>
        {
            visible &&
            <Container>
                <ModalArea>
                    <TopArea>
                        <CloseButtonArea
                            onClick={closeModal}
                        >
                            <IoMdClose />
                        </CloseButtonArea>
                    </TopArea>
                    <IconArea>
                        <CiCircleInfo />
                        <Message>{message}</Message>
                    </IconArea>
                    <InputComponent
                        type="text"
                        value={inputMessage}
                        onChange={(e) => {
                            setInputMessage(e.target.value);
                        }}
                    />
                    <IteractiveArea>
                        <ConfirmButton
                            name="Continuar"
                            onClick={() => {
                                onClick(inputMessage);
                                closeModal();
                            }}
                        />
                    </IteractiveArea>
                </ModalArea>
            </Container>
        }
        </>
    );
};