import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  top: 4rem;
  position: sticky;
  height: calc(100vh - 4rem);
  min-width: 220px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 10px 15px 64px 15px;
  scrollbar-width: none;
  text-align: left;
  transition: 0.2s;
  width: 25%;
  border-right: 1px solid rgb(237, 242, 247);

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;

    &:not(:first-child) {
      a {
        margin-top: 0.25rem;
      }
    }
  }

  a {
    display: flex;
    color: rgb(113, 128, 150);
    padding: 0.5rem;
    border-radius: 0.25rem;

    &:hover {
      background-color: rgb(247, 250, 252);
      color: rgb(26, 32, 44);
    }
    &.active {
      background-color: rgb(237, 242, 247);
      color: #000;
    }    
  }
`;

const links = [
  {
    path: '/',
    title: 'Overview',
  },
  {
    path: '/big-o',
    title: 'Big O',
  },
  {
    path: '/array',
    title: 'Array',
  },
  {
    path: '/hash-table',
    title: 'Hash Table',
  },
  {
    path: '/linked-list',
    title: 'Linked List',
  },
  {
    path: '/stack',
    title: 'Stack',
  },
  {
    path: '/queue',
    title: 'Queue',
  },
];

const Sidebar: React.FC = () => {
  const router = useRouter();
  
  return (
    <StyledSidebar>
      <ul>
        {links.map((link, i) => (
          <li key={`sidebar-link-${i}`}>
            <Link              
              href={link.path}
            >
              <a className={router.asPath === link.path ? 'active' : ''}>{link.title}</a>              
            </Link>
          </li>
        ))}
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
