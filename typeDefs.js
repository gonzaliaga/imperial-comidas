const { gql } = require('apollo-server-express')

const typeDefs = gql`

type Food {
  _id: ID
  name: String!
  price: Int!
  imageURL: String!
}
input FoodInput {
  name: String!
  price: Int!
  imageURL: String!
}


type Extra {
  _id: ID
  name: String!
  price: Int!
  imageURL: String!
}
input ExtraInput {
  name: String!
  price: Int!
  imageURL: String!
}


type Drink {
  _id: ID
  name: String!
  price: Int!
  imageURL: String!
}
input DrinkInput {
  name: String!
  price: Int!
  imageURL: String!
}


type Order {
  _id: ID
  products: [String]!
  total: Int!
  client: String!
}


    type Query{
        hello: String
        getDrinkList: [Drink]!
        getDrink(_id:ID): Drink
        getFoodList: [Food]!
        getFood(_id:ID): Food
        getExtraList: [Extra]!
        getExtra(_id:ID): Extra
        getOrderList: [Order]!
        getOrder(_id:ID): Order
    }

    type Mutation {
    addDrink(name: String!, price: Int!, imageURL: String!): Drink!
    deleteDrink(id: ID!): String!
    updateDrink(id: ID!, drink: DrinkInput!): Drink!
    addExtra(name: String!, price: Int!): Extra!
    deleteExtra(id: ID!): String!
    updateExtra(id: ID!, extra: ExtraInput!): Extra!
    addFood(name: String!, price: Int!, shift: String!, imageURL: String!): Food!
    deleteFood(id: ID!): String!
    updateFood(id: ID!, food: FoodInput!): Food!
    addOrder(food: [ID!]!, drink: [ID!]!, extra: [ID!]!, total: Int!, client: String!): Order!
}


    
`
module.exports = { typeDefs }