import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import styled from 'styled-components';
import CodeBlock from '../ui/CodeBlock';

const StyledDocContent = styled.div`
  height: calc(100% - 20px);
  margin: 0;
  padding: 20px 20px 64px 30px;
  min-width: 600px;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  text-align: left;
  transition: 0.2s;
  width: 75%;
`;

const Heading = styled.h1`
  font-size: 40px;
`;

export type Doc = {
  slug: string;
  meta: {
    [key: string]: any;
  };
  content: string;
};

type DocContentProps = {
  doc: Doc;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const components = {
  pre: CodeBlock,
};

const DocContent: React.FC<DocContentProps> = ({ doc, mdxSource }) => {  
  return (
    <StyledDocContent>
      <Heading>{doc.meta.title}</Heading>
      <MDXRemote {...mdxSource} components={components} />
    </StyledDocContent>
  );
};

export default DocContent;
