import config from '../../site.config';
import { MDXProvider } from '@mdx-js/react';
import { Box, Heading } from 'theme-ui';
import Nav from './Nav';

const Header = () => (
  <MDXProvider components={{}}>
    <Box as="header" sx={{ textAlign: 'center', pt: 4 }}>
      <Heading sx={{ fontSize: 3, pb: 2, px: 3 }} as="h1">
        {config.title}
      </Heading>
      {/* <Title>{config.title}</Title> */}
      <Heading sx={{ fontSize: 2, pb: 3, px: [3, 4] }}>{config.subtitle}</Heading>
      <Nav />
    </Box>
  </MDXProvider>
);

export default Header;
