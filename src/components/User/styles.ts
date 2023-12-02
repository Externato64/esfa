import styled from "styled-components";
import { css } from "styled-components";
import { Button } from "../base";

export const Container = styled.div`
    margin: 0.5rem 0;
    
    display: grid;
    grid-template-columns: 0.3fr 0.6fr 0.8fr 0.4fr 0.4fr 0.4fr;
    
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

export const UserInfo = styled.p`
    display: flex;
    height: 100%;

    font-size: 1.3rem;

    align-items: center;
    cursor: default;

    @media screen and (max-width: 1100px){
        font-size: 1rem;
        &:nth-child(2) {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &:nth-child(3) {
            overflow: scroll;
        }
    }
`;

type UserPhotoProps = {
    profileImage: string;
}
export const UserPhoto = styled.div<UserPhotoProps>`
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 50%;
    background: url(${({ profileImage }) => `'${profileImage}'`});
    background-size: cover;
    height: 3.7rem;
    width: 3.7rem;
    transition: 0.1s;

    @media screen and (max-width: 1100px){
        height: 2rem;
        width: 2rem;
    }
`;

type UserStatusProps = {
    active: boolean;
}
export const UserStatus = styled.div<UserStatusProps>`
    border: 1px solid ${({theme}) => theme.colors.input_disabled};
    border-radius: 1rem;
    
    max-width: 8rem;
    max-height: 60%;
    
    margin: auto 0;

    font-size: 1.3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    ${({active}) =>
        active ?
        css`
            border-color: ${({theme}) => theme.colors.success};
            color: ${({theme}) => theme.colors.success};
        `
        :
        css`
            border-color: ${({theme}) => theme.colors.attention};
            color: ${({theme}) => theme.colors.attention};
        `
    }

    &::after {
        ${({active}) =>
            active ?
            css`
                content: 'Ativo';
                border-color: ${({theme}) => theme.colors.success};
            `
            :
            css`
                content: 'Inativo';
                border-color: ${({theme}) => theme.colors.attention};
            `
        }
    }
    @media screen and (max-width: 1100px){
        font-size: 0.6rem;
        border-radius: 0.6rem;
        height: 100%;
        &::after {
            ${({active}) =>
                active ?
                css`
                    content: 'AT';
                    border-color: ${({theme}) => theme.colors.success};
                `
                :
                css`
                    content: 'IN';
                    border-color: ${({theme}) => theme.colors.attention};
                `
            }
        }
    }
`;

export const UserButton = styled(Button)``;

export const UserIteraction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const UserOptions = styled.div`
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
