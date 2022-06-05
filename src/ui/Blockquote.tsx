import React from 'react';
import styled from 'styled-components';

const StyledBlockquote = styled.blockquote`
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
  border-left: 0.32813rem solid hsla(0, 0%, 0%, 0.9);
  border-left-color: inherit;
  opacity: 0.8;
  p {
    margin-bottom: 0;
  }
  p::before {
    margin-right: 0.5rem;
  }
  p:not(:last-child) {
    margin-bottom: 1em;
  }
`;

const Blockquote: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <StyledBlockquote>{children}</StyledBlockquote>;
};

export default Blockquote;
