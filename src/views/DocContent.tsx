import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import styled from 'styled-components';

const StyledDocContent = styled.div`
  height: calc(100% - 20px);
  margin: 0;
  min-width: 600px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 20px 20px 0 30px;
  scrollbar-width: none;
  text-align: left;
  transition: 0.2s;
  width: 75%;
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

};

const DocContent: React.FC<DocContentProps> = ({ doc, mdxSource }) => {
  console.log(doc, mdxSource);
  
  return (
    <StyledDocContent>
      <h1>{doc.meta.title}</h1>
      <MDXRemote {...mdxSource} components={components} />
    </StyledDocContent>
  );
};

export default DocContent;
