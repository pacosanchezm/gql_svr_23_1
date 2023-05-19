var { buildSchema } = require("graphql");

let areas = require("./db/areas");
let lists = require("./db/lists");
let listelements = require("./db/listelements");


// ----------------------------------------------------------------------

exports.Schema = buildSchema(`

# -----------------------------------------------------------------------
# ---------------------------- Objets -----------------------------------




  type Area {
    Id: Int
    Space_division: Int
    Space: Int
    Space_title: String
    Space_description: String
    Area: Int
    Category: Int
    Date: Float
    Listed_order: Int
    Status: String
    Priority: Int
    Title: String
    Description: String
    Order: Int
    Date_due: Float
    Color: String
    Icon: String
    Notes: String
    
  }


  input AreaInput {
    Id: Int
    Division: Int
    Space: Int
    Area: Int
    Status: String
    Priority: Int

  }







  type List {
    Space_title: String
    Area: Int
    Area_title: String
    Area_description: String
    Id: Int
    List: Int
    Category: Int
    Date: Float
    Starred: Int
    Listed_order: Int
    Status: String
    Priority: Int
    Title: String
    Description: String
    Date_due: Float
    Color: String
    Icon: String
    Notes: String
    
  }


  input ListInput {
    Id: Int
    Area: Int
    List: Int
    Status: String
    Priority: Int

  }



  type ListElement {
    Space_title: String
    Area_id: Int
    Area_title: String
    List: Int
    List_title: String
    Id: Int
    Element: Int
    Title: String
    Description: String
    Category: Int
    Date: Float
    Date_due: Float
    Starred: Int
    Listed_order: Int
    Status: String
    Priority: Int
    Color: String
    Icon: String
    Notes: String
    
  }


  input ListElementInput {
    Id: Int
    List: Int
    Element: Int
    Status: String
    Priority: Int

  }

























# -----------------------------------------------------------------------
# ---------------------------- Querys -----------------------------------



  type Areas {
    Querys: AreasQuerys
  }
      type AreasQuerys {
        Basic(Query: AreaInput): [Area]
        Extended(Query: AreaInput): [Area]
      }



  type AreasM {
    Edit: AreasEdit
  }
      type AreasEdit {
        Update(Query: AreaInput): Int
      }
      


  type Lists {
    Querys: ListsQuerys
  }
      type ListsQuerys {
        Basic(Query: ListInput): [List]
        Extended(Query: ListInput): [List]
      }



  type ListsM {
    Edit: ListsEdit
  }
      type ListsEdit {
        Update(Query: ListInput): Int
      }
      


  type ListElements {
    Querys: ListElementsQuerys
  }
      type ListElementsQuerys {
        Basic(Query: ListElementInput): [ListElement]
        Extended(Query: ListElementInput): [ListElement]
      }



  type ListElementsM {
    Edit: ListElementsEdit
  }
      type ListElementsEdit {
        Update(Query: ListElementInput): Int
      }
      
    


# -----------------------------------------------------------------------
# ---------------------------- Types -----------------------------------



  type Query {
    Areas: Areas
    Lists: Lists
    ListElements:ListElements
  }




  type Mutation {
    AreasM: AreasM
    ListsM: ListsM
    ListElementsM: ListElementsM
  }



`);

exports.root = {

  Areas: new areas(),
  AreasM: new areas(),

  Lists: new lists(),
  ListsM: new lists(),

  ListElements: new listelements(),
  ListElementsM: new listelements(),


};
