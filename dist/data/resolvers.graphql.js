"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const db_1 = require("../db/db");
/**
 * GraphQL Resolvers
 **/
exports.resolvers = {
    Query: {
        logIn: (root, user) => {
            return new Promise((resolve, reject) => {
                db_1.User.findOne({ _id: user.id }, (err, user) => {
                    if (err)
                        reject(err);
                    else
                        resolve(user);
                });
            });
        },
    },
    Mutation: {
        signUp: (root, { user }) => {
            const rest = __rest(user, []);
            const newUser = new db_1.User(Object.assign({}, rest));
            return new Promise((resolve, reject) => {
                newUser.save((err, user) => {
                    if (err)
                        reject(err);
                    else
                        resolve(user);
                });
            });
        },
    },
};
