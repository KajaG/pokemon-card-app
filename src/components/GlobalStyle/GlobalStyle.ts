import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 16px;
        background-color: #F8F9FA;
        --custom-gold-background: -webkit-linear-gradient(top left, #BF953F, #ecce76, #B38728, #ecce76, #AA771C);
    }

    * {
        box-sizing: border-box;
    }

    h1 {
        text-align: center;
    }

    a {
        text-decoration: none;
        color: #000;
    }

`;
