import { createGlobalStyle } from "styled-components";
import "./global-font.css";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    }

    html {
    font-size: 13px;

    @include mobile {
        font-size: 11px;
    }
    }

    body {
        font-family: "Roboto", sans-serif;
    }
`;
