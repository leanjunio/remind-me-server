import { gql } from "apollo-server";

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Author {
    name: String
    books: [Book]
  }

  type Query {
    books: [Book]
  }
`;

export default typeDefs;
