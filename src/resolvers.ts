import { getModelForClass } from "@typegoose/typegoose";
import { Book } from "./entity/Books";

const BookModel = getModelForClass(Book);

export const resolvers = {
  Query: {
    books() {
      BookModel;
    },
  },
};
