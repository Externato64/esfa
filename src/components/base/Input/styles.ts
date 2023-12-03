import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 0.4rem;

    display: flex;
    align-items: center;

    svg {
        font-size: 1.5rem;
        margin-left: 0.4rem;
        color: ${({theme}) => theme.colors.primary};
    }
`;

export const InputApp = styled.input`
    width: 100%;
    margin: 0.4rem 0;
    padding-right: 1rem;
    border: none;
    background-color: transparent;
    font-size: 1.2rem;

    text-align: left;

    &:focus {
        outline: none;
    }
`;