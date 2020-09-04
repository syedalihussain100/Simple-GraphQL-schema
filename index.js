const { ApolloServer, gql } = require("apollo-server");

const students = [
  {
    id: 1,
    name: "Syed Muhemin Ali",
    email: "rzaid3616@gmail.com",
    address: "abckhu",
    age: 22,
  },
  {
    id: 2,
    name: "Hammad Khan",
    email: "hshahzain38@gmail.com",
    address: "abckhu",
    age: 23,
  },
  {
    id: 3,
    name: "Farhan Khan",
    email: "farhan@gmail.com",
    address: "abckhu",
    age: 25,
  },
];

const resolvers = {
  Query: {
    students: () => students,
  },
};

const typeDefs = gql`
  type Student {
    id: Int
    name: String
    email: String
    address: String
    age: Int
  }

  type Query {
    students: [Student]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
