"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = exports.PORT = void 0;
exports.PORT = process.env.PORT;
exports.environment = {
  development: {
    serverURL: `http://localhost:${process.env.PORT}/`,
    dbString: "mongodb://0.0.0.0:27017/graphql",
  },
  production: {
    serverURL: `http://localhost:${process.env.PORT}/`,
    dbString: "mongodb://0.0.0.0:27017/graphql-prod",
  },
};
