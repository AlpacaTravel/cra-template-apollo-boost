import ApolloClient from "apollo-boost";

// Access the environment variables to configure the URI
const endpoint = process.env.REACT_APP_ALPACA_GRAPHQL_ENDPOINT;
const accessToken = process.env.REACT_APP_ALPACA_ACCESS_TOKEN;

const client = new ApolloClient({
  uri: `${endpoint}?accessToken=${accessToken}`,
});

export default client;
