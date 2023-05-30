let knex = require("knex")(require("./knexfile")["ntcx1"]);
// let axios = require("axios");

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
              .modify(Q => {if (e.Status) {Q.where({ Status: e.Status });}})
              .from("Spaces")

              .as("Spaces")
            return MiBase

          } catch (e) {
            console.error(e);
          }
        },

        Extended: function(q) {
          try {
            let e = q.Query ? q.Query : q;

            let MiBase = knex.select("*")
              .modify(Q => {if (e.Division) {Q.where({ Division: e.Division });}})
              .modify(Q => {if (e.Space) {Q.where({ Space: e.Space });}})
              .modify(Q => {if (e.Status) {Q.where({ Status: e.Status });}})
              .modify(Q => {if (e.Category) {Q.where({ Category: e.Category });}})

              .from("Spaces1")
              
              .orderBy([
                { column: 'Division' }, 
                { column: 'Listed_order' }
              ])              
              
              .as("Areas")
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
            var sqU = await knex("Cupones")
              .where("Id", "=", e.Id)
              .update({
                Aplicado: moment().toDate(),
                Pedido: e.Pedido ? e.Pedido : null,
                Obv: e.Obv ? e.Obv : null
              });
            return sqU;
          } catch (e) {
            console.error(e);
            return 0;
          }
        },


      };
    } // ------- Registros

  };
};



module.exports = mifunction;
