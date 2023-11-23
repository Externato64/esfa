import { Storage } from "@/types";
import { inject, observer } from "mobx-react";
import React from "react";
import { Layout } from "../layout";
import Head from "next/head";

function HomePage(): JSX.Element {
    return (
        <>
            <Head>
                <title>Página Inicial</title>
            </Head>
            <Layout>
            <h1>HOME PAGE</h1>
            </Layout>
        </>
    );
}

export default inject(Storage.AUTH)(observer(HomePage));

