import { createGlobalStyle } from "styled-components";
import { esfaTheme } from "./theme.style";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900']
  })
  

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
        @media (max-height: 800px) {
        font-size: 14px;
        }
        font-family: ${roboto.style.fontFamily};
    }
    body {
        color: ${esfaTheme.colors.text};
    }
`;