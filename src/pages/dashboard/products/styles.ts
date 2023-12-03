import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const HeaderAction = styled.div`
    display: flex;

    button {
        margin: 0 1rem;
        padding: 0 2.6rem;
    }
    
    @media screen and (max-width: 1100px){
        button {
            margin: 0 0.2rem;
            padding: 0 1rem;
        }
    }
`;

export const TitleArea = styled.div``;

export const Title = styled.h1`
    font-size: 1.8rem;
`;

export const Subtitle = styled.p`
    color: ${({theme}) => theme.colors.text_gray};
`;

export const ProductsArea = styled.div`
    margin-top: 2rem;
    @media screen and (max-width: 1100px){
        overflow-x: scroll;
    }
`;

export const ProductsHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.5fr 0.5fr 0.4fr 1fr;
    padding: 0 0.5rem;

    /* @media screen and (max-width: 1100px){
        grid-gap: 0.5rem;
    } */
`;

export const ProductsItem = styled.p`
    color: ${({theme}) => theme.colors.text_gray};
`;
