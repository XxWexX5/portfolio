// pages/index.tsx
import { initializeApollo } from "@/lib/apollo-client";
import { GET_DATA, GET_DATA_PT_BR } from "@/api";
import Home from "@/components/Home";

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: GET_DATA });
  await apolloClient.query({ query: GET_DATA_PT_BR });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 60, // ISR: revalida a cada 60 segundos
  };
}

export default Home;
