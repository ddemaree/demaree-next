import fetch from 'cross-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: "https://demaree.space/graphql", fetch }),
  cache: new InMemoryCache(),
});

// const apolloClient = new ApolloClient({
//   uri: "https://demaree.space/graphql",
//   cache: new InMemoryCache(),
// });

export default apolloClient;