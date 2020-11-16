import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'SofiaProWeb';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        margin: 0;
        font-size: 1.1em;
        color: ${(props) => (props.mode === 'dark' ? '#ffffff' : '0d0d0d')};
        background: ${(props) =>
          props.mode === 'dark' ? '#0d0d0d' : 'rgb(247, 241, 237)'} ;        
    }

    hr {
        background: #f0a843;
        height: 0.2px;
        border: 0;
        width: 85%;
    }
`;

export { GlobalStyles };
