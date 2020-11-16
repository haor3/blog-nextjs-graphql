import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo';

export default function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialState);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
