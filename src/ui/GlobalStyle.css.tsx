import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  pre {
    font-family: "Fira Code", "JetBrains Mono", monospace;
    font-size: 13px;
  }

  blockquote {
    background-color: rgba(235, 236, 237, 0.3);
    border-radius: 3px;
    padding: 16px 12px;
    margin: 16px 0;
    font-family: "Ma Shan Zheng";

    p {
      margin-bottom: 0;
    }

    p::before {
      content: "🏞";
      margin-right: 0.5rem;
    }

    p:not(:last-child) { 
      margin-bottom:1em; 
    }
  }

  img {
    max-width: 100%;
  }
`;

const sizes = {
  '1275': 1275,
  '1150': 1150,
  '1050': 1050,
  '600': 600
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args: any[]) => css`
    @media (max-width: ${sizes[label] / 16}em) {      
      ${css.call(undefined, ...args)}
    }
  `;

  return acc;
}, {});

export default GlobalStyle;