import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/base";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;

    align-items: center;
    justify-content: center;
    
    background: linear-gradient(0deg, ${({theme}) => theme.colors.shape_light}, ${({theme}) => theme.colors.shape_light}), url('/images/externato.jpeg');
    background-size: cover;
`;

export const LoginArea = styled.div`
    width: 100%;
    max-width: 30%;

    height: 100%;
    max-height: 60%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    
    img {
        margin-bottom: 4rem;
    }

    @media screen and (max-width: 790px){
        max-width: 90%;
    }
`;

export const LoginInfoArea = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 100%;
`;

export const LoginInfoText = styled.p`
    text-align: center;
    font-weight: 400;
`;

export const LoginButton = styled(Button)`
    max-width: 17rem;
    height: 3.6rem;
    
    margin-top: 1rem;
`;

export const GoogleIcon = styled(FaGoogle)`
    margin-right: 0.3rem;
    font-size: 1.3rem;
`;