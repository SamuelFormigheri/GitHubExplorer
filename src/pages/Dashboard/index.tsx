import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/icons/logo.svg';

import { Container, Title, Form, ListRepositories, Error } from './styles';

import api from '../../services/api';

interface IRepository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepository, setNewRepository] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<IRepository[]>(getReposFromLocalStorage);

  function getReposFromLocalStorage(){
    const storagedRepositories = localStorage.getItem('@githubExplorer:repositories');
    if(storagedRepositories)
      return JSON.parse(storagedRepositories);
    else
      return [];
  }

  async function handleAddRepository(e:FormEvent) {
    e.preventDefault();
    if(!newRepository){
      setInputError('Type the author/name of the Repository.');
      return;
    }
    setInputError('');

    try
    {
      const response = await api.get<IRepository>(`repos/${newRepository}`);
  
      setRepositories([...repositories, response.data]);
      setNewRepository('');
    }
    catch(err)
    {
      setInputError('Error searching this repo. Please verify the author/name typed.');
    }
  }

  useEffect(()=>{
    localStorage.setItem('@githubExplorer:repositories', JSON.stringify(repositories));
  }, [repositories]);
  return (
    <Container>
      <img src={logo} alt="Logo"/>
      <Title>Exploit repositories on github</Title>
      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
        <input type="text" name="newRepository" id="newRepository" value={newRepository} onChange={e => {setNewRepository(e.target.value)}} placeholder="Type the name of the repository"/>
        <button type="submit">Search</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <ListRepositories>
        {repositories.length > 0 && repositories.map(repository => {
          return (
          <Link key={repository.id} to={`/repository/${repository.full_name}`}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20}/>
          </Link>
          );
        })}
       
      </ListRepositories>
    </Container>
  );
}

export default Dashboard;