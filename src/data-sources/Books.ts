import { prop } from "@typegoose/typegoose";

class Book {
  @prop()
  public title!: string;

  @prop()
  public author!: string;
}

export default Book;
