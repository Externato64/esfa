import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
        max-width: 25%;
    }
`;

export const TitleArea = styled.div``;

export const Title = styled.h1`
    font-size: 1.8rem;
`;

export const Subtitle = styled.p`
    color: ${({theme}) => theme.colors.text_gray};
`;

export const UsersArea = styled.div`
    margin-top: 2rem;
    @media screen and (max-width: 1100px){
        overflow-x: scroll;
    }
`;

export const UsersHeader = styled.div`
    display: grid;
    grid-template-columns: 0.3fr 0.6fr 0.8fr 0.4fr 0.4fr 0.4fr;
    padding: 0 0.5rem;

    @media screen and (max-width: 1100px){
        grid-gap: 0.5rem;
    }
`;

export const UsersItem = styled.p`
    color: ${({theme}) => theme.colors.text_gray};
`;
