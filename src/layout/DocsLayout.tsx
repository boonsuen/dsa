import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import styled from 'styled-components';
import Sidebar from '../ui/Sidebar';
import DocContent, { Doc } from '../views/DocContent';

const StyledDocsLayout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
  max-width: 1126px;
  transition: 0.2s;
`;

type DocsLayoutProps = {
  doc: Doc;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const DocsLayout: React.FC<DocsLayoutProps> = ({ doc, mdxSource }) => {
  return (
    <>
      {doc.meta.canonical_url && (
        <Head>
          <link
            rel="canonical"
            href={doc.meta.canonical_url}
          />
        </Head>
      )}
      <StyledDocsLayout>
        <Sidebar />
        <DocContent doc={doc} mdxSource={mdxSource} />
      </StyledDocsLayout>
    </>
  );
};

export default DocsLayout;
