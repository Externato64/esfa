import styled from "styled-components";

export const Container = styled.div`
    margin: 0.5rem 0;
    
    display: grid;
    grid-template-columns: 1fr 0.5fr 0.5fr 0.4fr 1fr;

    padding: 1rem 0.5rem;

    transition: 0.1s;
    &:hover {
        background-color: ${({theme}) => theme.colors.secondary_ultralight};
    }

    border-radius: 0.45rem;

    @media screen and (max-width: 1100px){
        grid-gap: 0.5rem;
    }
`;

export const ProductTypeArea = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0.2rem;

    svg {
        font-size: 1.6rem;
        color: ${({theme}) => theme.colors.text_gray_2};
    }

    @media screen and (max-width: 1100px){
        svg {
            font-size: 1.2rem;
        }
    }
`;

export const ProductInfo = styled.p`
    display: flex;
    height: 100%;

    font-size: 1.3rem;
    
    span {
        font-size: 1.3rem;
        text-decoration: line-through;
        color: ${({theme}) => theme.colors.attention};
    }

    align-items: center;
    cursor: default;

    @media screen and (max-width: 1100px){
        font-size: 1rem;
        span {
            font-size: 1rem;
        }
    }
`;

export const ProductOptions = styled.div`
    display: flex;
    align-items: center;
    
    svg {
        transition: 0.1s;
        margin-right: 0.5rem;
        color: ${({theme}) => theme.colors.primary};
        padding: 0.4rem;
        font-size: 2rem;
        overflow: visible;
    }
    
    svg:hover {
        cursor: pointer;
        border-radius: 50%;
        background-color: ${({theme}) => theme.colors.secondary_ultralight};
    }

    @media screen and (max-width: 1100px){
        svg {
            margin-right: 0.2rem;
            padding: 0.2rem;
            font-size: 1.5rem;
        }
    }
`;

export const ProductIteraction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;