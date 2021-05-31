import { MDXProvider } from '@mdx-js/react';
import MarkdownContent from '../mdx/about.mdx';
import Container from '../ui/Container';

const About: React.FC = (props: any) => {
  return (
    <MDXProvider components={{}}>
      <Container>
        <MarkdownContent />
      </Container>
    </MDXProvider>
  );
};

export default About;
