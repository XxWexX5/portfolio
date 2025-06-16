"use client";

import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { useApollo } from "./apollo-client"; // isso retorna um client só no client

export function ApolloWrapper({ children }: { children: ReactNode }) {
  const client = useApollo(null); // ou passe props se for o caso
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
