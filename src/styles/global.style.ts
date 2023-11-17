import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
        @media (max-height: 800px) {
        font-size: 14px;
        }
    }
    body {
        color: ${({theme}) => theme.colors.text};
    }
`;