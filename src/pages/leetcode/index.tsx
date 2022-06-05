import { config } from '../../../site.config';
import { getAllProblems } from '../../lib/problems';
import Layout from '../../layout/Layout';
import Problems, { Problem } from '../../views/Problems';

type LeetCodePageProps = {
  problems: Problem[];
};

const LeetCodePage: React.FC<LeetCodePageProps> = ({ problems }) => {
  return (
    <Layout
      docTitle={config.docTitle}
      description={config.description}
      url={config.url}
    >
      <Problems problems={problems} />
    </Layout>
  );
};

export async function getStaticProps() {
  const problems = getAllProblems([
    'title',
    'slug',
    'excerpt',
    'draft',
    'number',
    'difficulty',
    'topic',
  ]);

  return {
    props: { problems },
  };
}

export default LeetCodePage;
