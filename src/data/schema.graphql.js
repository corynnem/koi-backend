import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    email: String
    password: String
  }

  enum Gender {
    MALE
    FEMALE
    NONBINARY
  }

  input UserInput {
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    email: String
    password: String
  }

  type Query {
    logIn: [User]
  }

  type Mutation {
    signUp(user: UserInput): User
  }
`;

export default typeDefs;
