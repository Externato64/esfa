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

    background-color: ${({theme}) => theme.colors.shape};

    border-radius: 1.5rem;

    display: flex;
    flex-direction: column;

    align-items: center;

    @media screen and (max-width: 1100px){
        width: 90%;
    }
`;

export const TopArea = styled.div`
    width: 100%;

    margin: 1rem;

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
    margin-right: 0.6rem;

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
        font-size: 3rem;
        margin-right: 1rem;
    }

    margin-top: 1rem;
    margin-bottom: 1rem;
    
    @media screen and (max-width: 1100px){
        margin-top: 1.6rem;
    };

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 1rem;
`;

export const Message = styled.p`
    font-size: 1.8rem;
    text-align: center;
    
    @media screen and (max-width: 1100px){
        font-size: 1.6rem;
    };

    @media screen and (max-width: 600px){
        font-size: 1.3rem;
    };
`;

export const IteractiveArea = styled.div`
    display: flex;
    justify-content: center;

    width: 90%;

    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export const BaseButton = styled(Button)`
    max-width: 40%;
`;

export const ConfirmButton = styled(BaseButton)`
    /* background-color: ${({theme}) => theme.colors.success}; */
`;

export const InputComponent = styled.input`
    width: calc(100% - 2rem);
    margin: 0 1rem;
    padding: 0.4rem;
    font-size: 1.3rem;

    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 0.7rem;
`;
