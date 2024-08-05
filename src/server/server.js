
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Location {
    id: ID!
    name: String!
  }

  type Query {
    location(id: ID!): Location
  }
`;

const resolvers = {
  Query: {
    location: (_, { id }) => {
      return { id, name: "San Francisco" }; // Example data
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
