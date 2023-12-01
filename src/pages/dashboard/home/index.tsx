import { Storage } from "@/types";
import { inject, observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { Layout } from "../layout";
import Head from "next/head";
import { Container, Header, Subtitle, Title, TitleArea, UsersArea, UsersHeader, UsersItem } from "./styles";
import { Button } from "@/components/base";
import { User } from "@/components";
import { UserType } from "@/types/entities";
import { useApi, useToast } from "@/hooks";
import { ConfirmModal, LoadingModal } from "@/components/Modals";

function HomePage(): JSX.Element {

    const [users, setUsers] = useState<Array<UserType>>([]);
    const [loading, setIsLoading] = useState(false);
    
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [updateModalVisible, setUpdateModalVisible] = useState(false);
    
    const [currentUserEmail, setCurrentUserEmail] = useState('');

    const {getUsers, deleteUser, updateUserPermission} = useApi();
    const {toastError, toastSuccess, toastInfo} = useToast();

    const handleFetchUsers = async () => {
        setIsLoading(true);
        try {
            const { users: fetchedUsers } = await getUsers();
            setUsers(fetchedUsers);
            toastSuccess('Sucesso ao buscar usuários');
        } catch(err) {
         toastError('Erro ao buscar usuários');
        }
    };

    const handleDeleteUser = async () => {
        setIsLoading(true);
        try {
            await deleteUser({
                email: currentUserEmail
            });
            toastSuccess('Sucesso ao deletar usuário');
        } catch(err) {
         toastError('Erro ao deletar usuário');
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdateUser = async () => {
        setIsLoading(true);
        try {
            const user = users.find(user => user.email === currentUserEmail);
            await updateUserPermission({
                email: currentUserEmail,
                isAdmin: !user?.active
            });
            toastSuccess('Sucesso ao alterar usuário');
        } catch(err) {
         toastError('Erro ao alterar usuário');
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        handleFetchUsers()
        .finally(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            <Head>
                <title>Página Inicial</title>
            </Head>
            { loading && <LoadingModal /> }
            <ConfirmModal
                visible={deleteModalVisible}
                closeModal={() => setDeleteModalVisible(false)}
                message={`Deseja excluir o usuário ${currentUserEmail}?`}
                onAccept={handleDeleteUser}
                onDecline={() => {
                    toastInfo('Nenhuma ação feita!');
                }}
            />

            <ConfirmModal
                visible={updateModalVisible}
                closeModal={() => setUpdateModalVisible(false)}
                message={`Deseja alterar a permissão do usuário ${currentUserEmail}?`}
                onAccept={handleUpdateUser}
                onDecline={() => {
                    toastInfo('Nenhuma ação feita!');
                }}
            />
            <Layout>
                <Container>
                    <Header>
                        <TitleArea>
                            <Title>Usuários</Title>
                            <Subtitle>Gerenciar usuários do sistema</Subtitle>
                        </TitleArea>
                        <Button
                            name="Adicionar"
                            onClick={() => ({})}
                        />
                    </Header>
                    <UsersArea>
                        <UsersHeader>
                            <UsersItem>Foto</UsersItem>
                            <UsersItem>Nome</UsersItem>
                            <UsersItem>Email</UsersItem>
                            <UsersItem>Admin</UsersItem>
                            <UsersItem>Status</UsersItem>
                            <UsersItem>Ação</UsersItem>
                        </UsersHeader>
                        {
                            users.map((user, id) => (
                                <User
                                    key={id}
                                    user={user}
                                    onDelete={() => {
                                        setCurrentUserEmail(user.email);
                                        setDeleteModalVisible(true);
                                    }}
                                    onEdit={() => {
                                        setCurrentUserEmail(user.email);
                                        setUpdateModalVisible(true);
                                    }}
                                />
                            ))
                        }
                    </UsersArea>
                </Container>
            </Layout>
        </>
    );
}

export default inject(Storage.AUTH)(observer(HomePage));

