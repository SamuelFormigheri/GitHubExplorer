import React, {useEffect, useState} from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/icons/logo.svg';
import { Container, Header, RepositoryInfo, IssuesList } from './styles';

import api from '../../services/api';

interface IRepositoryParams{
  repository: string;
}

interface IRepository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  },
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface IIssue{
  id: number;
  title: string;
  user: {
    login: string;
  }
  html_url: string;

}

const Repository: React.FC = () => {
  const {params} = useRouteMatch<IRepositoryParams>();
  const [repository, setRepository] = useState<IRepository | null>(null);
  const [issues, setIssues] = useState<IIssue[]>([]);

  useEffect(()=>{
    //Requisições com Promises
    async function loadData(): Promise<void> {
      const [repository, issues] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`)
      ]);

      setRepository(repository.data);
      setIssues(issues.data);
    }

    loadData();
  }, [params.repository]);

  return (
    <Container>
      <Header>
        <img src={logo} alt="GitHub Explorer"/>
        <Link to="/">
          <FiChevronLeft size={16}/>
          Back To Dashboard
        </Link>
      </Header>
      { repository ? (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      ):
        <h2 style={{marginTop:'80px'}}>Loading ...</h2>
      }
      {issues && (
        <IssuesList>
          {issues.map(issue =>{
            return(
            <a key={issue.id} href={issue.html_url} target="_blank" rel="noopener noreferrer">
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight size={20}/>
            </a>
            );
          })}
        </IssuesList>
      )}
    </Container>
  );
}

export default Repository;