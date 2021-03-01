import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import { buildSchema } from "type-graphql";

import { ApolloServer } from "apollo-server";

import { BookResolver } from "./resolvers/book-resolver";

import typeDefs from "./schema";

(async () => {
  const connection = await createConnection();

  const schema = await buildSchema({
    resolvers: [BookResolver],
  });

  const server = new ApolloServer({
    schema,
    typeDefs,
  });

  server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`);
  });
})();
