import { ApolloServer } from "apollo-server";

import typeDefs from "./schema";

const books = [
  {
    title: "Life of Pie",
    author: "Yann Martel",
  },
  {
    title: "Stand By Me",
    author: "Stephen King",
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
