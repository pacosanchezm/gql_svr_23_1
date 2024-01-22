var { buildSchema } = require("graphql");

let spaces = require("./db/spaces");
let areas = require("./db/areas");
let lists = require("./db/lists");
let listelements = require("./db/listelements");
let elementitems = require("./db/elementitems");
let iteminputs = require("./db/itemsinputs.js");
let pharmaitems = require("./db/pharmaitems.js");

// ----------------------------------------------------------------------

exports.Schema = buildSchema(`

# -----------------------------------------------------------------------
# ---------------------------- Objets -----------------------------------




  type Space {
    Id: Int
    Space: Int
    Division: Int
    Division_title: String
    Category: Int
    Date: Float
    Listed_order: Int
    Status: String
    Title: String
    Description: String
    Color: String
    Icon: String
    Notes: String
    
  }


  input SpaceInput {
    Id: Int
    Division: Int
    Space: Int
    Status: String
    Category: Int
  }










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
    Category: Int

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
    Category: Int

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
    Category: Int

  }








  type ListElementItem {
    Space_title: String
    Area_id: Int
    Area_title: String
    List_id: Int
    List_title: String
    Id: Int
    Element_id: Int
    Element_title: String
    Item: Int
    Item_key: String
    Item_description: String
    Item_color: String
    Item_icon: String

    Category: Int
    Category_key: String
    Category_description: String

    Listed_order: Int
    Status: String
    Quantity: Float
    Notes: String
    
  }


  input ListElementItemInput {
    Id: Int
    List: Int
    Element: Int
    Item: Int
    Status: String
    Priority: Int
    Category: Int

  }









  type ItemInput {
    Area_id: Int
    Area_title: String
    List_id: Int
    List_title: String
    Id: Int
    Element_id: Int
    Element_title: String
    Item_id: Int
    Item_key: String
    Item_description: String
    Category: Int
    Category_key: String
    Category_description: String

    Input: Int
    Input_id: Int
    Input_key: String
    Input_description: String
    Status: String
    Date: Float

    Value: Float
    Value_char: String
    
    Notes: String
    User: Int
    
  }


  input ItemInputInput {
    Id: Int
    List: Int
    Element: Int
    Item: Int
    Input: Int
    Status: String
    Value: Float
    Value_char: String


  }



  type PharmaItem {
    Id: Int
    Cat: String
    Laboratorio: String
    Producto: String
    Presentacion: String
    Precio: Float
    Detalles: String
    Ingredientes: String
    Caracteristicas: String
    Notas: String
    SKU: String
    Url: String
    Foto: String
   
  }




  input PharmaItemInput {
    Id: Int
    Cat: String
    Laboratorio: String
    Producto: String
    Presentacion: String
    Precio: Float
    Detalles: String
    Ingredientes: String
    Caracteristicas: String
    Notas: String
    SKU: String
    Url: String
    Foto: String
   
  }






















# -----------------------------------------------------------------------
# ---------------------------- Querys -----------------------------------



  type Spaces {
    Querys: SpacesQuerys
  }
      type SpacesQuerys {
        Basic(Query: SpaceInput): [Space]
        Extended(Query: SpaceInput): [Space]
      }



  type SpacesM {
    Edit: SpacesEdit
  }
      type SpacesEdit {
        Update(Query: SpaceInput): Int
      }






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
      
    

  type ListElementItems {
    Querys: ListElementItemsQuerys
  }
      type ListElementItemsQuerys {
        Basic(Query: ListElementItemInput): [ListElementItem]
        Extended(Query: ListElementItemInput): [ListElementItem]
      }





  type ListElementItemsM {
    Edit: ListElementItemsEdit
  }
      type ListElementItemsEdit {
        Update(Query: ListElementItemInput): Int
      }
      



    type ItemInputs {
      Querys: ItemInputsQuerys
    }
        type ItemInputsQuerys {
          Basic(Query: ItemInputInput): [ItemInput]
          Extended(Query: ItemInputInput): [ItemInput]
        }
  
  
  
    type ItemInputsM {
      Edit: ItemInputsEdit
    }
        type ItemInputsEdit {
          Update(Query: ItemInputInput): Int
        }
        
  
        type PharmaItems {
          Querys: PharmaItemsQuerys
        }
            type PharmaItemsQuerys {
              Basic(Query: PharmaItemInput): [PharmaItem]
              Producto(Query: PharmaItemInput): [PharmaItem]
              Ingrediente(Query: PharmaItemInput): [PharmaItem]
              Detalles(Query: PharmaItemInput): [PharmaItem]

            }




# -----------------------------------------------------------------------
# ---------------------------- Types -----------------------------------



  type Query {
    
    Spaces: Spaces
    Areas: Areas
    Lists: Lists
    ListElements:ListElements
    ListElementItems:ListElementItems
    ItemInputs:ItemInputs
    PharmaItems:PharmaItems
  }




  type Mutation {
    SpacesM: SpacesM
    AreasM: AreasM
    ListsM: ListsM
    ListElementsM: ListElementsM
    ListElementItemsM: ListElementItemsM
    ItemInputsM: ItemInputsM

  }



`);

exports.root = {
  Spaces: new spaces(),
  SpacesM: new spaces(),

  Areas: new areas(),
  AreasM: new areas(),

  Lists: new lists(),
  ListsM: new lists(),

  ListElements: new listelements(),
  ListElementsM: new listelements(),

  ListElementItems: new elementitems(),
  ListElementItemsM: new elementitems(),

  ItemInputs: new iteminputs(),
  ItemInputsM: new iteminputs(),

  PharmaItems: new pharmaitems(),
};
