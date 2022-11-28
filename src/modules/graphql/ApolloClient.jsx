import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://one-stop.hasura.app/v1/graphql',
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'c7WOPosympZbZPlIxIldbXmkQ7llcPJQc59RZ2zYJpSl4qCiX36wRYv2EgLM7lD7',
      },
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
