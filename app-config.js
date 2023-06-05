export const environment = {
  development: {
    serverURL: `http://localhost:${process.env.PORT}/`,
    dbString: "mongodb://0.0.0.0:27017/graphqlTutorial",
  },
  production: {
    serverURL: `http://localhost:${process.env.PORT}/`,
    dbString: "mongodb://0.0.0.0:27017/graphqlTutorial-prod",
  },
};
