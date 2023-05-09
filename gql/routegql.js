var express = require("express")
const router = express.Router();

var { buildSchema, GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql")
var { createHandler } = require("graphql-http/lib/use/express")



var Schema = require("./schema.js");



router.use(
  "/",
  (req, res, next) => {



    res.header("Access-Control-Allow-Credentials", true);




    res.header(
      "Access-Control-Allow-Headers",
      "content-type, authorization, content-length, x-requested-with, accept, origin"
    );
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.header("Allow", "POST, GET, OPTIONS");
    res.header("Access-Control-Allow-Origin", "*");
    


    if (req.method === "OPTIONS") {
      res.sendStatus(200);

   //res.send('<link rel="stylesheet" type="text/css" href="css/styles.css" />');

    } else {
      next();
    }




  },
        
        
createHandler(
  
  
  {
    schema: Schema.Schema,
    pretty: true,
    rootValue: Schema.root,
    graphiql: true
  }
  
  
  
)
        
        
   );     
   
   
   module.exports = router;
