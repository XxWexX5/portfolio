import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://proud-book-588e97a674.strapiapp.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer 407076d0bc6568cbcbae9578449a7447496c8e5a986b1c12edeb5a9423f5d9488fc0fbf7f807bcb37ad444a468dd605fe58d4fc33d180ecd48d976537462d98f63177e9c44a7e38354f02d09781a0346dc41f6bf027bc13268ad9b7f14d7a29c20112ae9f8bb69eecf2ec3fc708ed27f007956b911a24736bd30a9405b358136`,
  }
});