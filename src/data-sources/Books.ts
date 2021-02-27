import { getModelForClass, prop } from "@typegoose/typegoose";

class Book {
  @prop()
  public title!: string;

  @prop()
  public author!: string;
}

const BookModel = getModelForClass(Book);

export { BookModel as Book };
