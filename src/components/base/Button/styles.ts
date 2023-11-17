import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: ${({theme}) => theme.units.border.normal};
    
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.text_inverse};

    font-weight: 600;
    font-size: 1.2rem;

    padding: 0.6rem;

    cursor: pointer;

    transition: 0.05s;

    &:hover {
        transform: scale(1.05);
        background-color: ${({theme}) => theme.colors.secondary};
    }
    
    &:active {
        transform: scale(0.95);
    }
`;