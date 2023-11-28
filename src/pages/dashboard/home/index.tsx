import { Storage } from "@/types";
import { inject, observer } from "mobx-react";
import React from "react";
import { Layout } from "../layout";
import Head from "next/head";
import { Container, Header, Subtitle, Title, TitleArea, UsersArea, UsersHeader, UsersItem } from "./styles";
import { Button } from "@/components/base";
import { User } from "@/components";

function HomePage(): JSX.Element {
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
                            <UsersItem>Nivel</UsersItem>
                            <UsersItem>Status</UsersItem>
                            <UsersItem>Ação</UsersItem>
                        </UsersHeader>
                        <User />
                        <User />
                        <User />
                        <User />
                        <User />
                        <User />
                    </UsersArea>
                </Container>
            </Layout>
        </>
    );
}

export default inject(Storage.AUTH)(observer(HomePage));

