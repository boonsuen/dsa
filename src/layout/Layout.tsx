import Head from './Head';
import { GlobalStyle } from './GlobalStyle.css';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 64px;
`;

type LayoutProps = {
  docTitle: string;
  description: string;
  url: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Head {...props} />
      <GlobalStyle />
      <Header />
      <Wrapper>{props.children}</Wrapper>
      <Footer />
    </>
  );
};

export default Layout;
