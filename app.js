const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const users = require('./data').users;
const me = users[0];
const typeDefs = gql`
    type Query {
        me: User
        users: [User]
        user(id: Int!): User
    }

    type User {
        id: ID!
        name: String!
        }
    `;

const resolvers = {
    Query: {
        users: () => users,
        //user: (parent, args, context, info)
        user: (parent, { id }) => {
            const user = users.filter(user => user.id === id);
            return user[0];
        },
        me: () => me
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.start().then(res => {
    server.applyMiddleware({ app });
    app.listen({ port: 3000 }, () =>
        console.log("nice")
    )
})