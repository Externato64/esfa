import { ProductType } from "@/types/entities";
import React, { useEffect, useState } from "react";
import { CloseButtonArea, ConfirmButton, Container, IteractiveArea, ModalArea, ProductInfoArea, ProductInput, ProductSection, ProductSectionInfo, ProductSelectionArea, TopArea } from "./styles";
import { IoMdClose } from "react-icons/io";
import { CurrencyInput, Input, Select } from "@/components/base";
import { IoCartOutline, IoFastFood } from "react-icons/io5";
import { BiDollar, BiSolidDrink } from "react-icons/bi";
import { FaHamburger } from "react-icons/fa";

type ProductModalProps = {
    product?: ProductType;
    onAccept: () => void;
    visible: boolean;
    closeModal: () => void;
}

export const ProductModal = ({
    closeModal,
    onAccept,
    visible,
    product,
}: ProductModalProps): JSX.Element => {

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productOldPrice, setProductOldPrice] = useState(0);
    const [productType, setProductType] = useState("food");

    useEffect(() => {
        if(product) {
            setProductName(product.name);
            setProductPrice(product.price);
            setProductOldPrice(product.oldPrice ?? product.price);
            setProductType(product.type);
        } else {
            setProductName("");
            setProductPrice(0);
            setProductOldPrice(0);
            setProductType('food');
        }
    }, [product]);

    return(
        <>
        {
            visible &&
            <Container>
                <ModalArea>
                    <TopArea>
                        <CloseButtonArea
                            onClick={closeModal}
                        >
                            <IoMdClose />
                        </CloseButtonArea>
                    </TopArea>
                    <ProductInfoArea>
                        <ProductSection>
                            <ProductSectionInfo>Nome:</ProductSectionInfo>
                            <Input
                            Icon={IoCartOutline}
                                type="text"
                                value={productName}
                                onChange={(e) => {
                                    setProductName(e.target.value);
                                }}
                            />
                        </ProductSection>
                        <ProductSection>
                            <ProductSectionInfo>Preço:</ProductSectionInfo>
                            <CurrencyInput
                                Icon={BiDollar}
                                value={productOldPrice}
                                onChange={setProductOldPrice}
                            />
                        </ProductSection>
                        <ProductSection>
                            <ProductSectionInfo>Preço Desconto:</ProductSectionInfo>
                            <CurrencyInput
                                Icon={BiDollar}
                                value={productPrice}
                                onChange={setProductPrice}
                            />
                        </ProductSection>
                        <ProductSection>
                                <ProductSectionInfo>
                                    Tipo:
                                    {productType === 'food' && <FaHamburger />}
                                    {productType === 'drink' && <BiSolidDrink />}
                                    {productType === 'both' && <IoFastFood />}
                                </ProductSectionInfo>
                                <Select
                                    options={[
                                        { name: 'Bebida', value: 'drink' },
                                        { name: 'Alimento', value: 'food' },
                                        { name: 'Outros', value: 'both' },
                                    ]}
                                    onChange={(e: any) => setProductType(e)}
                                    defaultValue={product?.type}
                                />
                        </ProductSection>
                    </ProductInfoArea>
                    <IteractiveArea>
                        <ConfirmButton
                            name="Salvar"
                            onClick={() => {
                                onAccept();
                                closeModal();
                            }}
                        />
                    </IteractiveArea>
                </ModalArea>
            </Container>
        }
        </>
    );
};