import { Storage } from "@/types";
import { inject, observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { Layout } from "../layout";
import Head from "next/head";
import { Container, Header, HeaderAction, ProductsArea, ProductsHeader, ProductsItem, Subtitle, Title, TitleArea } from "./styles";
import { Button } from "@/components/base";
import { Product } from "@/components/Product";
import { ProductType } from "@/types/entities";
import { useApi, useToast } from "@/hooks";
import { ConfirmModal, LoadingModal } from "@/components/Modals";
import { ProductModal } from "@/components/Modals/ProductModal";

function ProductsPage(): JSX.Element {
    const [products, setProducts] = useState<Array<ProductType>>([]);
    const [loading, setIsLoading] = useState(false);
    
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [createOrUpdateProductVisible, setCreateOrUpdateProductVisible] = useState(false);
    const [currentProduct, setCurrentProduct] = useState<ProductType | undefined>(undefined);


    const {getProducts} = useApi();
    const {toastError, toastSuccess, toastInfo} = useToast();

    const handleFetchProducts = async () => {
        setIsLoading(true);
        try {
            const { products: fetchedProducts } = await getProducts();
            setProducts(fetchedProducts);
            toastSuccess('Sucesso ao buscar produtos');
        } catch(err) {
         toastError('Erro ao buscar produtos');
        }
    };

    useEffect(() => {
        handleFetchProducts()
        .finally(() => {
            setIsLoading(false);
        });;
    //eslint-disable-next-line
    }, []);

    return (
        <>
            <Head>
                <title>Produtos</title>
            </Head>
            { loading && <LoadingModal /> }
            <ConfirmModal
                visible={deleteModalVisible}
                closeModal={() => setDeleteModalVisible(false)}
                message={`Deseja excluir o produto ${currentProduct?.name}?`}
                onAccept={() => {}}
                onDecline={() => {
                    toastInfo('Nenhuma ação feita!');
                }}
            />
            <ProductModal
                visible={createOrUpdateProductVisible}
                closeModal={() => setCreateOrUpdateProductVisible(false)}
                onAccept={() => ({})}
                product={currentProduct}
            />
            <Layout>
                <Container>
                        <Header>
                            <TitleArea>
                                <Title>Produtos</Title>
                                <Subtitle>Gerenciar os produtos</Subtitle>
                            </TitleArea>
                            <HeaderAction>
                                <Button
                                    name="Adicionar"
                                    onClick={() => {
                                        setCurrentProduct(undefined);
                                        setCreateOrUpdateProductVisible(true);
                                    }}
                                />
                                <Button
                                    name="Imprimir"
                                    onClick={() => ({})}
                                />
                            </HeaderAction>
                        </Header>
                        <ProductsArea>
                            <ProductsHeader>
                                <ProductsItem>Nome</ProductsItem>
                                <ProductsItem>Valor</ProductsItem>
                                <ProductsItem>Desconto</ProductsItem>
                                <ProductsItem>Tipo</ProductsItem>
                                <ProductsItem>Ação</ProductsItem>
                            </ProductsHeader>
                            {products.map((product, id) => (
                                <Product
                                    product={product}
                                    key={id}
                                    onDelete={() => {
                                        setCurrentProduct(product);
                                        setDeleteModalVisible(true);
                                    }}
                                    onEdit={() => {
                                        setCurrentProduct(product);
                                        setCreateOrUpdateProductVisible(true);
                                    }}
                                />
                            ))}
                        </ProductsArea>
                    </Container>
            </Layout>
        </>
    );
}

export default inject(Storage.AUTH)(observer(ProductsPage));

