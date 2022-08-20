import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    body{
        background-color: white;
    }
    p {
	margin: 0;
	font-size:16px;
    line-height: 1.8;
    }
    a{
        text-decoration: none;
    }
    ul{
        padding: 0;
    }

`;

export default GlobalStyle;
