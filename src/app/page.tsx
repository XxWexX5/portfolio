import { initializeApollo } from "@/lib/apollo-client";
import { GET_DATA, GET_DATA_PT_BR } from "@/api";
import Home from "@/components/Home"; // componente client separado

export default async function Page() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({ query: GET_DATA });
  const { data: dataPTbr } = await apolloClient.query({
    query: GET_DATA_PT_BR,
  });

  return <Home data={data} dataPTbr={dataPTbr} />;
}
