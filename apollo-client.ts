import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  uri: process.env.NEXT_APP_API_URL,
  cache: new InMemoryCache(),
  ssrMode: true,
  defaultOptions,
});

const noSSRClient = new ApolloClient({
  uri: process.env.NEXT_APP_API_URL,
  cache: new InMemoryCache(),
  ssrMode: false,
  defaultOptions,
});

export { client, noSSRClient };
