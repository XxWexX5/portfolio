"use client";

import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { apolloClient } from "./apollo-client";

export function ApolloWrapper({ children }: { children: ReactNode }) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
