"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql)`
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
