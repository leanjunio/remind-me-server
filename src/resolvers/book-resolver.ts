import { Resolver, Query } from "type-graphql";

import { Book } from "../entities/Books";

@Resolver()
export class BookResolver {
  private readonly bookCollection!: Book[];

  @Query(() => [Book], { description: "Get all books" })
  async books(): Promise<Book[]> {
    return await this.bookCollection;
  }
}
