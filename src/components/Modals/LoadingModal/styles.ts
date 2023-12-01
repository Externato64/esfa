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

    width: 10vw;
    height: 10vw;

    border-radius: 50%;
    border: 0.3rem solid ${({theme}) => theme.colors.secondary_light};

    border-top-color: ${({theme}) => theme.colors.shape};
    animation: 1.2s spin infinite linear;

    &.multi {
        border-bottom-color: ${({theme}) => theme.colors.shape};
    }
`;