import User from "../db/db.js";

/**
 * GraphQL Resolvers
 **/

const resolvers = {
  Query: {
    logIn: (root, user) => {
      return new Promise((resolve, reject) => {
        User.findOne({ _id: user.id }, (err, user) => {
          if (err) reject(err);
          else resolve(user);
        });
      });
    },
  },
  Mutation: {
    signUp: (root, { user }) => {
      const { ...rest } = user;
      const newUser = new User({ ...rest });

      return new Promise((resolve, reject) => {
        newUser.save((err, user) => {
          if (err) reject(err);
          else resolve(user);
        });
      });
    },
  },
};

export default resolvers;
