import MDX from '@mdx-js/runtime';
import styled from 'styled-components';
import { Flex, Box, Heading, Text } from 'theme-ui';
import Container from '../ui/Container';
import DraftBadge from '../ui/DraftBadge';
import Link from 'next/link';

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 1.25em 0 0;
  width: 100%;

  th, td {
    padding: 10px 12px;
    text-align: left;
  }

  tr td {
    background-color: #f8f8f8;
  }

  tr:nth-of-type(2n + 2) td {
    background-color: #fff;
  }
`;

interface DifficultyProps {
  readonly difficulty: 'Easy' | 'Medium' | 'Hard';
}

const Difficulty = styled.code<DifficultyProps>`
  background-color: ${(props) => {
    if (props.difficulty === 'Easy') {
      return '#5fb760';
    } else if (props.difficulty === 'Medium') {
      return '#eeac57';
    } else {
      return '#d75452';
    }
  }};
  color: #fff;
  padding: 4px 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  border-radius: 20px;
`;

const Posts = ({ posts, prevPosts, nextPosts }) => {
  const isLocal = process.env.NODE_ENV === 'development';

  return (
    <Container>
      <MDX># Problems</MDX>
      <StyledTable>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Topic</th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts
              .filter((post) => {
                return isLocal || !post.draft;
              })
              .map((post, i) => (
                <tr key={`tr-${post.slug}`}>
                  <td>{post.number}</td>
                  <td style={{ position: 'relative' }}>
                    {post.draft && <DraftBadge />}
                    <Link href={'/' + post.slug} passHref>
                      <a>{post.title}</a>
                    </Link>
                  </td>
                  <td>
                    <Difficulty difficulty={post.difficulty}>
                      {post.difficulty}
                    </Difficulty>
                  </td>
                  <td>{post.topic}</td>
                </tr>
              ))}
        </tbody>
      </StyledTable>
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
