import styled from 'styled-components';
import Link from 'next/link';
import { theme } from '../layout/Theme';

const StyledNav = styled.nav`
  a {
    margin: 0 12px;
    color: rgb(96, 103, 112);
    transition: color 200ms cubic-bezier(0.08,0.52,0.52,1);

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <Link href="/">Home</Link>
      <Link href="/leetcode">LeetCode</Link>
    </StyledNav>
  );
};

export default Nav;
