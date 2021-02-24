import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
  {
    title: "Paradise of Gold",
    author: "Paul Auster",
  },
  {
    title: "Twilight",
    author: "Stephanie Meyer",
  },
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
