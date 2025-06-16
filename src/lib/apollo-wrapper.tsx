"use client";

import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { useApollo } from "./apollo-client";

export function ApolloWrapper({ children }: { children: ReactNode }) {
  const client = useApollo(null);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
