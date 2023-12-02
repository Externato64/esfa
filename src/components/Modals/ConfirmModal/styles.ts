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
    display: flex;
    justify-content: space-between;

    width: 90%;

    margin-top: auto;
    margin-bottom: 2rem;
`;

export const BaseButton = styled(Button)`
    max-width: 40%;
`;

export const ConfirmButton = styled(BaseButton)`
    background-color: ${({theme}) => theme.colors.success};
`;

export const DeclineButton = styled(BaseButton)`
    background-color: ${({theme}) => theme.colors.attention};
`;
