import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import styled from 'styled-components';
import Sidebar from '../ui/Sidebar';
import DocContent, { Doc } from '../views/DocContent';

const StyledDocsLayout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  max-width: 1080px;
  padding: 0 10px 0;
  transition: .2s;
`;

type DocsLayoutProps = {
  doc: Doc;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const DocsLayout: React.FC<DocsLayoutProps> = ({ doc, mdxSource }) => {
  return (
    <StyledDocsLayout>
      <Sidebar />
      <DocContent doc={doc} mdxSource={mdxSource} />
    </StyledDocsLayout>
  );
}

export default DocsLayout;