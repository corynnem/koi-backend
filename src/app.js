import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { ApolloServer } from "apollo-server-express";
import resolvers from "./data/resolvers.graphql.js";
import typeDefs from "./data/schema.graphql.js";

/**
 * Create an Apollo server instance.
 */
const server = new ApolloServer({ typeDefs, resolvers });

/**
 * Create an express server and apply the Apollo Server middleware
 */
const app = express();
server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen({ port: process.env.PORT }, () => {
    console.log(
      `Server is running at http://localhost:${process.env.PORT}${server.graphqlPath}`
    );
  });
});

app.get("/", (req, res) => {
  console.log("Apollo GraphQL Express server is ready");
});
