import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: #333;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto', sans-serif;
    }

    button, input, select, textarea {
        font-family: 'Roboto', sans-serif;
    }
`;