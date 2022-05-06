//section 3 challenge
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const users = require('./data').users;
const cars = require('./data').cars;
const me = users[0];
const typeDefs = gql`
    type Query {
        me: User
        users: [User]
        user(id: Int!): User
        cars: [Car]
        car(id: Int!): Car
    }

    type User {
        id: ID!
        name: String!
        }

    type Car {
        id: ID!
        make: String!
        model: String!
        color: String
        owner: User!
        }
    `;

const resolvers = {
    Query: {
        users: () => users,
        user: (parent, { id }) => {
            const user = users.filter(user => user.id === id);
            return user[0];
        },
        me: () => me,
        cars: () => cars,
        car: (parent, { id }) => {
            const user = cars.filter(car => car.id === id);
            return cars[0];
        }
    },
    Car: {
        owner: parent => users[parent.ownedBy - 1]
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