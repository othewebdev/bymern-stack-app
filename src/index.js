import React from 'react';
import { render } from 'react-dom';
import Index from './Home';
import './index.css';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context'

const httpLink = createHttpLink({
    uri: 'http://localhost:5000'
})

const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken');
  return{
      headers: {
        Authorization: token ? `Bearer ${token}` :  ''
      }
  }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})



function App() {
  return (
    <ApolloProvider client={client}>
      <Index/>
    </ApolloProvider>
  );
}

render(<App />, document.getElementById('root'));