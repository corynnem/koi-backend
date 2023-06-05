export default {
  development: {
    serverURL: `http://localhost:${process.env.PORT}/`,
    dbString: "mongodb://localhost:27017/graphql",
  },
  production: {
    serverURL: `http://localhost:${process.env.PORT}/`,
    dbString: "mongodb://localhost:27017/graphql-prod",
  },
};
