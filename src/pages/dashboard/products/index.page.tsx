import { Storage } from "@/types";
import { inject, observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import Layout from "../layout.page";
import Head from "next/head";
import { Container, Header, HeaderAction, ProductsArea, ProductsHeader, ProductsItem, Subtitle, Title, TitleArea } from "./styles";
import { Button } from "@/components/base";
import { Product } from "@/components/Product";
import { CreateProductType, ProductType } from "@/types/entities";
import { useApi, useToast } from "@/hooks";
import { ConfirmModal, LoadingModal } from "@/components/Modals";
import { ProductModal } from "@/components/Modals/ProductModal";
import { generateProductsPdf } from "@/services/utils";

function ProductsPage(): JSX.Element {
    const [products, setProducts] = useState<Array<ProductType>>([]);
    const [loading, setIsLoading] = useState(false);
    
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [createOrUpdateProductVisible, setCreateOrUpdateProductVisible] = useState(false);
    const [currentProduct, setCurrentProduct] = useState<ProductType | undefined>(undefined);


    const {getProducts, createProduct, updateProduct, deleteProduct} = useApi();
    const {toastError, toastSuccess, toastInfo} = useToast();

    const handleGeneratePdf = () => {
        const pdfDocument = generateProductsPdf(products);
        pdfDocument.download('lista-produtos');
    };

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

    const handleDeleteProduct = async () => {
        setIsLoading(true);
        try {
            if(currentProduct) {
                await deleteProduct({
                    id: currentProduct?.id
                });
            }
            toastSuccess('Sucesso ao buscar produtos');
            await handleFetchProducts();
        } catch(err) {
         toastError('Erro ao buscar produtos');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateOrUpdateProduct = async (input: CreateProductType) => {
        setIsLoading(true);
        try {
            if(
                (!input.price || input.price <=0) &&
                (input.oldPrice && input.oldPrice > 0)
            ) {
                input.price = input.oldPrice;
                input.oldPrice = undefined;
            }
            if(currentProduct) {
                if(input.oldPrice === input.price) {
                    input.oldPrice = undefined;
                }
                await updateProduct({
                    ...input,
                    id: currentProduct.id
                });
                toastSuccess('Produto alterado');
            } else {
                await createProduct(input);
                toastSuccess('Produto criado');
            }
            await handleFetchProducts();
        } catch(err) {
         toastError('Ocorreu um erro');
        } finally {
            setIsLoading(false);
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
                onAccept={() => {
                    handleDeleteProduct();
                }}
                onDecline={() => {
                    toastInfo('Nenhuma ação feita!');
                }}
            />
            <ProductModal
                visible={createOrUpdateProductVisible}
                closeModal={() => setCreateOrUpdateProductVisible(false)}
                onAccept={handleCreateOrUpdateProduct}
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
                                    onClick={() => {
                                        handleGeneratePdf();
                                    }}
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

