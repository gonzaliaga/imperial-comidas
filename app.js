require("dotenv").config()
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");
const { connectDb } = require("./db");
const Drink = require('./models/Drink');
const Food = require('./models/Food');
const Extra = require('./models/Extra');
const Order = require('./models/Order');

const app = express();
connectDb();

app.get("/", (req, res) => {
  res.send("Welcome to MAYAMI");
});

async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    Drink,
    Food,
    Extra,
    Order
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/api" });

  app.use((req, res, next) => {
    res.status(404).send("No se Encontro!");
  });

  app.listen(process.env.PORT, () =>
    console.log("Server on port", process.env.PORT)
  );
}

start();