console.log("Hello CodeSandbox");



var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema, GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql")
var { createHandler } = require("graphql-http/lib/use/express")

// Construct a schema, using GraphQL schema language
var schemaold = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!"
  },
}





const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world',
      },
    },
  }),
});



















var app = express()


app.get("/", (req, res) => {

  res.send("Servidor GraphQL Iniciado");
});



// app.use('/graphql', createHandler({ schema }));

app.use('/graphql', createHandler(
  
  
  {
    schema: schemaold,
    rootValue: root,
    graphiql: true,
  }
  
  
  
));



app.use(
  "/graphqlold",
  graphqlHTTP({
    schema: schemaold,
    rootValue: root,
    graphiql: true,
  })
)









var gql = require("./gql/routegql");
app.use("/gql", gql);









app.listen(8080, () => {
  console.log("Node apps es running on port: 8080");

  (async () => {
   //  console.log(await publicIp.v4());
  })();
});