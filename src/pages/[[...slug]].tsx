import { GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { config } from '../../site.config';
import DocsLayout from '../layout/DocsLayout';
import Layout from '../layout/Layout';
import { getAllDocs, getDocBySlug } from '../lib/docs';
import { Doc } from '../views/DocContent';

type DocPageProps = {
  doc: Doc;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const DocPage: React.FC<DocPageProps> = ({ doc, mdxSource }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.6/dist/katex.min.css"
          integrity="sha384-ZPe7yZ91iWxYumsBEOn7ieg8q/o+qh/hQpSaPow8T6BwALcXSCS6C6fSRPIAnTQs"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout
        docTitle={config.docTitle}
        description={config.description}
        url={config.url}
      >
        <DocsLayout doc={doc} mdxSource={mdxSource} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  let slug: string;
  if (!context.params.slug) {
    // Home page
    slug = 'overview';
  } else {
    slug = context.params.slug[0];
  }
  const doc = getDocBySlug(slug);

  const mdxSource = await serialize(doc.content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
    scope: {},
  });

  console.log(doc, mdxSource);

  return {
    props: { doc, mdxSource },
  };
};

export const getStaticPaths = async () => {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: { slug: doc.slug === 'overview' ? false : [doc.slug] },
      };
    }),
    fallback: false,
  };
};

export default DocPage;
