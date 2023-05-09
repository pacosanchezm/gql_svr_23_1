
var { buildSchema } = require("graphql");


let areas = require("./db/areas");



// ----------------------------------------------------------------------




exports.Schema = buildSchema(`




type Area {
  Space: Int
  Space_title: String
  Area: Int

}

input AreaInput {
  Space: Int
  Area: Int

}



# -----------------------------------------------------------------------


# ---------------------------- Querys -----------------------------------



      type Areas {
        Consultas: AreasConsultas
      }
    
        type AreasConsultas {
          Base(Query: AreaInput): [Area]
          Status(Query: AreaInput): [Area]
          Amplia(Query: AreaInput): [Area]

        }









  type Query {
    hello: String
    Areas: Areas
  }



`);






exports.root = {
    
      hello: () => {
    return "Hello world!333"
  },
  
    Areas: new areas(),

  
  
    
    
    };