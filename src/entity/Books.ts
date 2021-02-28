import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class Book {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  title!: string;

  @Column()
  author!: string;
}
