import Link from 'next/link';
import styled from 'styled-components';
import { config } from '../../site.config';
import Nav from './Nav';

const StyledHeader = styled.header`
  height: 4rem;
  width: 100%;
  box-shadow: 0 2px 4px rgb(0 0 0 / 2%);
  border-bottom: 1px solid rgb(237, 242, 247);
  background-color: rgb(255 255 255 / 97%);
  position: fixed;
  z-index: 20;

  .header__wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 100%;
  }
`;

const Logo = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 16px;
  a {
    color: #000;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="header__wrapper container">
      <Logo>
        <Link href="/">{config.logoTitle}</Link>
      </Logo>
      <Nav />
    </div>
  </StyledHeader>
);

export default Header;
