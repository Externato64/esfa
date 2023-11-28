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

function HomePage(): JSX.Element {

    const [users, setUsers] = useState<Array<UserType>>([]);
    const [loading, setIsLoading] = useState(false);

    const {getUsers} = useApi();
    const {toastError} = useToast();

    const handleFetchUsers = async () => {
        try {
            const { users: fetchedUsers } = await getUsers();
            setUsers(fetchedUsers);
        } catch(err) {
         toastError('Erro ao buscar usuários');
        }
    };

    useEffect(() => {
        setIsLoading(true);
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

