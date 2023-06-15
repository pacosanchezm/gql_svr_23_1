let knex = require("knex")(require("./knexfile")["ntcx1"]);
// -------------------------------------------------------------


let mifunction = function() {
    return {
      Querys: function() {
        return {
          Basic: function(q) {
            try {
              let e = q.Query ? q.Query : q;
  
              let MiBase = knex.select("*")
                .modify(Q => {if (e.Id) {Q.where({ Id: e.Id });}})
                .modify(Q => {if (e.Item) {Q.where({ Item: e.Item });}})
                .modify(Q => {if (e.Input) {Q.where({ Input: e.Input });}})
                .modify(Q => {if (e.Status) {Q.where({ Status: e.Status });}})
                .from("Lists_elements_items_inputs")
  
                .as("Inputs")
              return MiBase
  
            } catch (e) {
              console.error(e);
            }
          },
  
          Extended: function(q) {

            try {
              let e = q.Query ? q.Query : q;
  
  
             // console.log(e)
  
  
              let MiBase = knex.select("*")
                .modify(Q => {if (e.List) {Q.where({ List_id: e.List });}})
                .modify(Q => {if (e.Element) {Q.where({ Element_id: e.Element });}})
                .modify(Q => {if (e.Item) {Q.where({ Item_id: e.Item });}})

                .modify(Q => {if (e.Input) {Q.where({ Input: e.Input });}})
                .modify(Q => {if (e.Status) {Q.where({ Status: e.Status });}})
  
                .from("Lists_elements_items_inputs1")
                
                .orderBy([
                  { column: 'Element_id' }, 

                ])              
                
                .as("Inputs")
              return MiBase
  
            } catch (e) {
              console.error(e);
            }
          },
  
  
  
  
  
        };
      }, // ------- Consultas
  
      Edit: function() {
        return {
  
  
           Update: async function Update(q) {
             let e = q.Query ? q.Query : q;

             try {
               var sqU = await knex("Lists_elements_items_inputs")
                 .where("Id", "=", e.Input)
                 .update({
                   Value: e.Value ? e.Value : null
                 });
               return sqU;
             } catch (e) {
              console.error(e);
               return 0;
             }
            
           },
  



    //      Update: function (q) {
     //       return 1
     //     }



        };
      } // ------- Edit


  
    };
  };
  
  
  
  module.exports = mifunction;
  