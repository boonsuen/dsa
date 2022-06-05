import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../layout/Theme';

const StyledProblems = styled.div`
  padding: 48px 0;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 1.25em 0 0;
  width: 100%;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  th {
    border-bottom: 1px solid #e2e2e2;
  }

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

type DifficultyType = 'Easy' | 'Medium' | 'Hard';

interface DifficultyProps {
  readonly difficulty: DifficultyType;
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
  font-family: ${theme.fonts.body};
  font-size: 14px;
  border-radius: 20px;
`;

export type Problem = {
  slug: string;
  number: number;
  title: string;
  difficulty: DifficultyType;
  topic: string;
  excerpt?: string;
  content: string;
};

type ProblemsProps = {
  problems: Problem[];
};

const Problems: React.FC<ProblemsProps> = ({ problems }) => {
  return (
    <StyledProblems className="container">
      <h1>Problems</h1>
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
          {problems.map((prob) => (
            <tr key={`tr-${prob.slug}`}>
              <td>{prob.number}</td>
              <td style={{ position: 'relative' }}>
                <Link href={'/leetcode/' + prob.slug}>{prob.title}</Link>
              </td>
              <td>
                <Difficulty difficulty={prob.difficulty}>
                  {prob.difficulty}
                </Difficulty>
              </td>
              <td>{prob.topic}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledProblems>
  );
};

export default Problems;
