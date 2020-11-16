import { useMemo } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';

const apolloClient = null;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: process.env.NEXT_PUBLIC_API }),
    cache: new InMemoryCache(),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function initializeApollo(initialState) {
  const aplClient = apolloClient || createApolloClient();

  if (initialState) {
    aplClient.cache.restore(initialState);
  }

  return aplClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
