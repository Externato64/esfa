import React from "react";
import { Container, UserInfo, UserOptions, UserPhoto, UserStatus } from "./styles";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";


export const User = (): JSX.Element => {
    return (
        <Container>
            <UserPhoto
                profileImage={'/images/logo_externato.png'}
                onClick={() => ({})}
            />
            <UserInfo>Duda Jamile</UserInfo>
            <UserInfo>dj.dudajamile@gmail.com</UserInfo>
            <UserInfo>Admin</UserInfo>
            <UserStatus
                active={false}
            />
            <UserOptions>
                <MdEdit
                    
                />
                <FaTrash />
            </UserOptions>

        </Container>
    );
};