import express from "express";
import { graphqlHTTP } from "express-graphql";
// const expressGraphQL = require("express-graphql").graphqlHTTP;

// import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import pkg from "graphql";
const { GraphQLObjectType, GraphQLSchema, GraphQLString } = pkg;
const app = express();

const port = process.env.PORT || 5000;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "HelloWorld",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "HelloWorld",
      },
    }),
  }),
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(port, () =>
  console.log("Server is running at http://localhost:5000/graphql")
);
