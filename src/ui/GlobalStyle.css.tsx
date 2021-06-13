import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  pre {
    font-family: "Fira Code", "JetBrains Mono", monospace;
    font-size: 13px;
  }

  blockquote {
    margin-left: -1.75rem;
    margin-right: 1.75rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 1.42188rem;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.75rem;
    font-size: 1.20112rem;
    line-height: 1.75rem;
    color: inherit;
    font-style: italic;
    border-left: 0.32813rem solid hsla(0,0%,0%,0.9);
    border-left-color: inherit;
    opacity: 0.8;

    p {
      margin-bottom: 0;
    }

    p::before {
      margin-right: 0.5rem;
    }

    p:not(:last-child) { 
      margin-bottom:1em; 
    }
  }

  .aboutBQ {
    background-color: rgba(235, 236, 237, 0.3);
    border-radius: 3px;
    padding: 16px 12px;
    margin: 16px 0;
    font-family: "Ma Shan Zheng";
    border-left: none;
    font-style: normal;
    font-size: 1rem;

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