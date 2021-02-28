import "reflect-metadata";
import { createConnection, Connection } from "typeorm";

import { ApolloServer } from "apollo-server";

import { resolvers } from "./resolvers";
import typeDefs from "./schema";

(async () => {
  const connection: Connection = await createConnection();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
})();
