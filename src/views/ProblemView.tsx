import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import styled from 'styled-components';
import { Problem } from './Problems';
import LeetCodeLink, { LeetCodeLinkProps } from '../ui/LeetCodeLink';
import CodeBlock from '../ui/CodeBlock';
import Link from 'next/link';
import { theme } from '../layout/Theme';

const Container = styled.div`
  width: 90%;
  max-width: 768px;
  margin: auto;
  padding: 64px 0;

  @media only screen and (min-width: 850px) and (max-width: 920px) {
    max-width: 700px;
  }
`;

const StyledLink = styled.a`
  margin-bottom: 24px;
  display: inline-flex;
  gap: 0.5rem;
  color: rgb(113, 128, 150);
  transition: color 200ms cubic-bezier(0.08, 0.52, 0.52, 1);

  &:hover {
    color: ${theme.colors.primary};
  }

  svg {
    transform: rotate(180deg);
  }
`;

const Heading = styled.h1`
  font-size: 40px;
  margin-bottom: 32px;
`;

type ProblemViewProps = {
  problem: Problem;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const ProblemView: React.FC<ProblemViewProps> = ({ problem, source }) => {
  const components = {
    LeetCodeLink: (props: LeetCodeLinkProps) => <LeetCodeLink {...props} />,
    pre: CodeBlock,
  };

  return (
    <Container>
      <Link href="/leetcode" passHref>
        <StyledLink>
          <svg
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span>Back</span>
        </StyledLink>
      </Link>
      <Heading>{problem.title}</Heading>
      <MDXRemote {...source} components={components} />
    </Container>
  );
};

export default ProblemView;
