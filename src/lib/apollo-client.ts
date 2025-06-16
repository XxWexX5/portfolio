/* eslint-disable @typescript-eslint/no-explicit-any */

import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // true no servidor (SSG)
    link: new HttpLink({
      uri: "https://proud-book-588e97a674.strapiapp.com/graphql",
      headers: {
        Authorization: `Bearer 407076d0bc6568cbcbae9578449a7447496c8e5a986b1c12edeb5a9423f5d9488fc0fbf7f807bcb37ad444a468dd605fe58d4fc33d180ecd48d976537462d98f63177e9c44a7e38354f02d09781a0346dc41f6bf027bc13268ad9b7f14d7a29c20112ae9f8bb69eecf2ec3fc708ed27f007956b911a24736bd30a9405b358136`,
      },
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}
