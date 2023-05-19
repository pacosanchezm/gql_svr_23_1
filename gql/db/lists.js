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
              .from("Lists")

              .as("Lists")
            return MiBase

          } catch (e) {
            console.error(e);
          }
        },

        Extended: function(q) {
          try {
            let e = q.Query ? q.Query : q;

            let MiBase = knex.select("*")
              .modify(Q => {if (e.Area) {Q.where({ Area: e.Area });}})
              .modify(Q => {if (e.List) {Q.where({ List: e.List });}})
              .modify(Q => {if (e.Status) {Q.where({ Status: e.Status });}})

              .from("Lists1")
              
              .orderBy([
                { column: 'List' }, 
                { column: 'Listed_order' }
              ])              
              
              .as("Lists")
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
