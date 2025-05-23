import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer 148d7f2199babf697eb356ae0e10a9288e6c2ea5f11d64df43d5c0f2059e7210942044d4e222e592a9272ae1a97f5c0426f54d4bf486ac8de32e6d55c9ad5c78313df830d551f3b553086eb2501ccde59a1442e70a848fe3d5603d96277a5448a0387838fe6726c030e3f7bbd88ece5fc8510eacd2722cd95efa06f8bca1f200`,
  }
});