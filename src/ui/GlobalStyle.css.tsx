import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  pre {
    font-family: "Fira Code", "JetBrains Mono", monospace;
    font-size: 13px;
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