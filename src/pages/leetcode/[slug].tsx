import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { config } from '../../../site.config';
import { getProblemBySlug, getAllProblems } from '../../lib/problems';
import Layout from '../../layout/Layout';
import { Problem } from '../../views/Problems';
import ProblemView from '../../views/ProblemView';

type ProblemPageProps = {
  problem: Problem;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const ProblemPage: React.FC<ProblemPageProps> = ({ problem, source }) => (
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
        url={config.url + problem.slug}
        docTitle={problem.title + ' | ' + config.docTitle}
        description={problem.excerpt}
      >
        <ProblemView problem={problem} source={source} />
      </Layout>
  </>
);

export async function getStaticProps({ params }) {
  const problem = getProblemBySlug(params.slug, [
    'title',
    'slug',
    'excerpt',
    'number',
    'difficulty',
    'topic',
    'content',
  ]);

  const mdxSource = await serialize(problem.content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
    scope: problem,
  });

  return {
    props: { problem, source: mdxSource },
  };
}

export async function getStaticPaths() {
  const problems = getAllProblems(['slug']);

  return {
    paths: problems.map((prob) => {
      return {
        params: { ...prob },
      };
    }),
    fallback: false,
  };
}

export default ProblemPage;
