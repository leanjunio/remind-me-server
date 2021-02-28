import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import TypeGraphQL from "type-graphql";

import { ApolloServer } from "apollo-server";

import { BookResolver } from "./resolvers/book-resolver";

import typeDefs from "./schema";

(async () => {
  const connection: Connection = await createConnection();

  const schema = await TypeGraphQL.buildSchema({
    resolvers: [BookResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
})();
