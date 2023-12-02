import React from "react";
import { CloseButtonArea, ConfirmButton, Container, DeclineButton, IconArea, IteractiveArea, Message, ModalArea, TopArea } from "./styles";
import { CiCircleInfo, CiWarning } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export type ModalType = 'info' | 'warn' | 'err';
type ConfirmModalProps = {
    message: string;
    onAccept: () => void;
    onDecline: () => void;
    visible: boolean;
    closeModal: () => void;
    type?: ModalType;
}

export const ConfirmModal = ({
    visible,
    closeModal,
    message,
    onAccept,
    onDecline,
    type = 'info'
}: ConfirmModalProps): JSX.Element => {
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
                        { type === 'info' && <CiCircleInfo /> }
                        { type === 'warn' || type === 'err' && <CiWarning /> }
                    </IconArea>
                    <Message>{message}</Message>
                    <IteractiveArea>
                        <ConfirmButton
                            name="Sim"
                            onClick={() => {
                                onAccept();
                                closeModal();
                            }}
                        />
                        <DeclineButton
                            name="Não"
                            onClick={() => {
                                onDecline();
                                closeModal();
                            }
                        }
                        />
                    </IteractiveArea>
                </ModalArea>
            </Container>
        }
        </>
    );
};