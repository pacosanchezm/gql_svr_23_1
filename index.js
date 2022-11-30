console.log("Hello CodeSandbox");



var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
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



var app = express()


app.get("/", (req, res) => {

  res.send("Servidor GraphQL Iniciado");
});







app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)


app.listen(8080, () => {
  console.log("Node apps es running on port: 8080");

  (async () => {
   //  console.log(await publicIp.v4());
  })();
});