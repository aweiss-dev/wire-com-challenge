import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

import { Library } from "./Search.types";

const uri = "https://libraries.io/api/";
const endpoint = "bower-search";
const getEndpoint = (searchString: string | undefined) =>
  searchString && !!searchString.length
    ? `${endpoint}?q=${searchString}`
    : endpoint;

const restLink = new RestLink({ uri });
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});

const GET_LIBRARIES = gql`
  query getLibrabries {
    libraries(libName: $libName, pathBuilder: $pathBuilder)
      @rest(type: "Library", pathBuilder: $pathBuilder) {
      name
      description
      homepage
      repository_url
      stars
    }
  }
`;

export type QueryVariables = {
  libName: string;
  pathBuilder: ({ args }: { args: QueryVariables }) => string;
};
export type QueryResult = {
  libraries: Library[];
};

const fetchLibraries = (value: string) =>
  client.query<QueryResult, QueryVariables>({
    query: GET_LIBRARIES,
    variables: {
      libName: value,
      pathBuilder: ({ args }) => getEndpoint(args.libName),
    },
  });

export { uri, client, getEndpoint, fetchLibraries };
