
var express = require("express")
var { buildSchema, GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql")
var { createHandler } = require("graphql-http/lib/use/express")

const publicIp = require("public-ip");


console.log("Hello");


var app = express()


app.get("/", (req, res) => {

  res.send("Servidor GraphQL Iniciado");
});



var gql = require("./gql/routegql");
app.use("/gql", gql);



app.listen(8080, () => {
  console.log("Node apps es running on port: 8080");

  (async () => {
    console.log(await publicIp.v4());
  })();
});