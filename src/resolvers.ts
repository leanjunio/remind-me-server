import { getModelForClass } from "@typegoose/typegoose";
import Book from "./data-sources/Books";

const BookModel = getModelForClass(Book);

export const resolvers = {
  Query: {
    books() {
      BookModel
    },
  },
};
