import { Button } from "@/components/base";
import styled, { css } from "styled-components";


export const Container = styled.div`
    animation: inModalBg 100ms forwards ease-out;
    position: absolute;
    width: 100vw;
    height: 100vh;

    background-color: ${({theme}) => theme.colors.secondary_light};
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalArea = styled.div`

    animation: inModal 200ms forwards ease-out;

    width: 60%;
    height: 30%;

    background-color: ${({theme}) => theme.colors.shape};

    border-radius: 1.5rem;

    display: flex;
    flex-direction: column;

    align-items: center;

    @media screen and (max-width: 1100px){
        width: 90%;
    }
    
    @media screen and (max-height: 1300px){
        height: 60%;
    }
`;

export const TopArea = styled.div`
    width: 90%;

    margin-top: 2rem;

    display: flex;
    justify-content: end;

    @media screen and (max-width: 1100px){
        margin-top: 0.8rem;
    };
`;

export const CloseButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        font-size: 2.6rem;
        padding: 0.4rem;
    }
    
    &:hover {
        cursor: pointer;
        border-radius: 50%;
        background-color: ${({theme}) => theme.colors.secondary_ultralight};
    }
`;

export const IconArea = styled.div`
    svg {
        font-size: 9rem;
    }

    margin-top: 3rem;
    margin-bottom: 2rem;
    
    @media screen and (max-width: 1100px){
        margin-top: 1.6rem;
    };
`;

export const Message = styled.p`
    font-size: 1.8rem;
    text-align: center;
    
    @media screen and (max-width: 1100px){
        font-size: 1.6rem;
    };
`;

export const IteractiveArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;


    margin-top: auto;
    margin-bottom: 2rem;
`;

export const BaseButton = styled(Button)`
    max-width: 40%;
`;

export const ConfirmButton = styled(BaseButton)`
    background-color: ${({theme}) => theme.colors.success};
`;

export const ProductSection = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

export const ProductSectionInfo = styled.p`
    margin-bottom: 0.4rem;
    display: flex;
    align-items: center;
    svg {
        margin-left: 0.5rem;
        font-size: 1.4rem;
        color: ${({theme}) => theme.colors.primary};
    }
`;

export const ProductInfoArea = styled.div`
    width: calc(100%);
    padding: 0 1.4rem;
    display: flex;
    flex-direction: column;
`;

export const ProductInput = styled.input``;

export const ProductSelectionArea = styled.input``;