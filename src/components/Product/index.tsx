import React from "react";
import { Container, ProductInfo, ProductIteraction, ProductOptions, ProductTypeArea } from "./styles";
import { formatCurrency } from "@/services/utils";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { BiSolidDrink } from "react-icons/bi";
import { FaHamburger } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { ProductType } from "@/types/entities";

type ProductProps = {
    product: ProductType;
    onEdit: () => void;
    onDelete: () => void;
}

export const Product = ({ product, onDelete, onEdit }: ProductProps): JSX.Element => {
    return (
        <Container>
            <ProductInfo>{product.name}</ProductInfo>
            <ProductInfo>
                {
                product.oldPrice ?
                    <span>{formatCurrency(product.oldPrice)}</span> :
                    formatCurrency(product.price)
                }
            </ProductInfo>
            <ProductInfo>
                {
                product.oldPrice ?
                    formatCurrency(product.price) :
                    ''
                }
            </ProductInfo>
            <ProductTypeArea>
                {product.type === 'drink' && <BiSolidDrink />}
                {product.type === 'food' && <FaHamburger />}
                {product.type === 'both' && <IoFastFood />}
            </ProductTypeArea>
            <ProductOptions>
                <ProductIteraction
                    onClick={onEdit}
                >
                    <MdEdit />
                </ProductIteraction>
                <ProductIteraction
                    onClick={onDelete}
                >
                    <FaTrash />
                </ProductIteraction>
            </ProductOptions>
        </Container>
    );
};