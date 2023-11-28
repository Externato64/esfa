import React from "react";
import { Container, UserInfo, UserOptions, UserPhoto, UserStatus } from "./styles";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { UserType } from "@/types/entities";

type UserProps = {
    user: UserType;
}

export const User = ({ user }: UserProps): JSX.Element => {
    return (
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
                <MdEdit
                />
                <FaTrash
                />
            </UserOptions>

        </Container>
    );
};