import React from "react";
import { Container, UserInfo, UserIteraction, UserOptions, UserPhoto, UserStatus } from "./styles";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { UserType } from "@/types/entities";

type UserProps = {
    user: UserType;
    onEdit: () => void;
    onDelete: () => void;
}

export const User = ({ user, onEdit, onDelete }: UserProps): JSX.Element => {

    return (
        <>
        <Container>
            <UserPhoto
                profileImage={user.photo ?? '/images/logo_externato.png'}
                onClick={() => ({})}
            />
            <UserInfo>{user.name}</UserInfo>
            <UserInfo>{user.email}</UserInfo>
            <UserInfo>{user.isAdmin ? 'SIM' : 'NÃO'}</UserInfo>
            <UserStatus
                active={user.active}
            />
            <UserOptions>
                <UserIteraction
                    onClick={onEdit}
                >
                    <MdEdit
                    />
                </UserIteraction>

                <UserIteraction
                    onClick={onDelete}
                >
                    <FaTrash
                    />
                </UserIteraction>
            </UserOptions>

        </Container>
        </>
    );
};