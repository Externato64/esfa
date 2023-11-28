import { Storage } from "@/types";
import { inject, observer } from "mobx-react";
import React from "react";
import { Layout } from "../layout";
import Head from "next/head";

function ProductsPage(): JSX.Element {
    return (
        <>
            <Head>
                <title>Produtos</title>
            </Head>
            <Layout>
            <h1>PRODUTOS</h1>
            </Layout>
        </>
    );
}

export default inject(Storage.AUTH)(observer(ProductsPage));

