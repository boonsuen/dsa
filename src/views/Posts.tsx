import MDX from '@mdx-js/runtime';
import { Flex, Box, Heading, Text } from 'theme-ui';
import Image from 'next/image';
import Container from '../ui/Container';
import DraftBadge from '../ui/DraftBadge';
import Link from 'next/link';

const Posts = ({ posts, prevPosts, nextPosts }) => {
  const isLocal = process.env.NODE_ENV === 'development';

  return (
    <Container>
      <h1>Problems</h1>
      <table id="table" className="leetcode-prob">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Topic</th>
          </tr>
        </thead>
        <tbody>
          {
            posts && posts.filter((post) => {
              return isLocal || !post.draft;
            }).sort((a, b) => {
              if (a.number > b.number) return 1;
              if (a.number < b.number) return -1;
              return 0;
            }).map((post, i) => (
              <tr key={`tr-${post.slug}`}>
                <td>{post.number}</td>
                <td style={{position: 'relative'}}>
                  {post.draft && <DraftBadge />}
                  <Link href={'/' + post.slug} passHref>
                    <a>{post.title}</a>
                  </Link>
                </td>
                <td>
                  <code className="button medium">
                    {post.difficulty}
                  </code>
                </td>
                <td>
                  {post.topic}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Flex sx={{ fontStyle: 'italic' }}>
        <Box sx={{ width: '50%', py: 3, textAlign: 'left' }}>
          {prevPosts !== null && (
            <Link href={'/blog/' + prevPosts} passHref>
              <a>« see newer posts</a>
            </Link>
          )}
        </Box>
        <Box sx={{ width: '50%', py: 3, pr: 3, textAlign: 'right' }}>
          {nextPosts !== null && (
            <Link href={'/blog/' + nextPosts} passHref>
              <a>see older posts »</a>
            </Link>
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export default Posts;
