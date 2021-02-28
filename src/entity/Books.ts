import { ObjectType, ID, Field } from "type-graphql";
import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

@ObjectType()
@Entity()
export class Book {
  @Field(type => ID)
  @ObjectIdColumn()
  id!: ObjectID;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  author!: string;
}
