import styled from "styled-components";

export const Container = styled.select`
    width: 100%;
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 0.4rem;
    padding: 0.4rem 0.4rem;

    display: flex;
    align-items: center;
    background-color: transparent;
    
    font-size: 1.2rem;

    svg {
        font-size: 1.5rem;
        margin-left: 0.4rem;
        color: ${({theme}) => theme.colors.primary};
    }


    &:focus {
        outline: none;
    }
`;

export const Option = styled.option``;