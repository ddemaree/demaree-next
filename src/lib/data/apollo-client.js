import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://demaree.space/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;