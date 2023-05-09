
var { buildSchema } = require("graphql");










exports.Schema = buildSchema(`


  type Query {
    hello: String
  }



`);






exports.root = {
    
      hello: () => {
    return "Hello world!333"
  },
    
    
    };