interface IBook {
  _id: string;
  title: string;
  author: string;
}

export const resolvers = {
  Query: {
    books(): IBook {
      return {
        _id: "1",
        title: "Twilight",
        author: "Stephanie Meyer",
      };
    },
  },
};
