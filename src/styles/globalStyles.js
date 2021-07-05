import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: Open-Sans, Helvetica, Sans-Serif;
        color: ${({ theme }) => theme.bodyTextColor};
        transition: all 0.50s linear;
        background: ${({ theme }) => theme.bodyBg};
    }
`;

export default GlobalStyle;
