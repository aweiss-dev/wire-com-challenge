import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

import { Library } from "./Search.types";

const uri = "https://libraries.io/api/";
const endpoint = "bower-search";

const restLink = new RestLink({ uri });
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});

const GET_LIBRARIES = gql`
  query getLibrabries {
    libraries(
      name: $name
      sortByStars: $sortByStars
      pathBuilder: $pathBuilder
    ) @rest(type: "Library", pathBuilder: $pathBuilder) {
      name
      description
      homepage
      repository_url
      stars
    }
  }
`;

const getEndpoint = ({ name, sortByStars }: fetchLibrariesProps) => {
  if (name && !!name.length) {
    return `${endpoint}?q=${name}${sortByStars ? "&sort=stars" : ""}`;
  }

  if (sortByStars) {
    return `${endpoint}?sort=stars`;
  }

  return endpoint;
};

export type QueryVariables = {
  name: string;
  sortByStars?: boolean;
  pathBuilder: ({ args }: { args: QueryVariables }) => string;
};
export type QueryResult = {
  libraries: Library[];
};

interface fetchLibrariesProps {
  name: string;
  sortByStars?: boolean;
}
const fetchLibraries = ({ name, sortByStars = false }: fetchLibrariesProps) =>
  client.query<QueryResult, QueryVariables>({
    query: GET_LIBRARIES,
    variables: {
      sortByStars,
      name,
      pathBuilder: ({ args }) => getEndpoint(args),
    },
  });

export { uri, client, getEndpoint, fetchLibraries };
