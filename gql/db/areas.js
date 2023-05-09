let knex = require("knex")(require("./knexfile")["ntcx1"]);
let axios = require("axios");





// -------------------------------------------------------------




let mifunction = function() {
  return {
    Consultas: function() {
      return {
        Base: function(q) {
          try {
            let e = q.Query ? q.Query : q;

            let MiBase = knex.select("*")
              .modify(Q => {if (e.Id) {Q.where({ Id: e.Id });}})

              .from("Areas1")
              .as("Areas")
            return MiBase

          } catch (e) {
            console.error(e);
          }
        },

        Status: function(q) {
          try {
            let e = q.Query ? q.Query : q;

            let MiBase = knex.select("*")
              .modify(Q => {if (e.Id) {Q.where({ Id: e.Id });}})

              .modify(Q => {if (e.Status) {Q.where({ Status: e.Status });}})

              .from("Areas1")

              .orderBy("Id")

              .as("Areas")
            return MiBase

          } catch (e) {
            console.error(e);
          }
        },





      };
    }, // ------- Consultas

    Registro: function() {
      return {
        // Insert: async function Insert(q) {
        //   let e = q.Query ? q.Query : q;
        //   try {
        //     var qI = await knex("Consumos").insert({
        //       Pedido: e.Pedido,
        //       Fecha: moment().toDate(),
        //       Producto: e.Producto,
        //       Precio: e.Precio,
        //       PrecioObv: e.PrecioObv,
        //       Descuento: e.Descuento ? e.Descuento : null,
        //       Cantidad: e.Cantidad ? e.Cantidad : 0,
        //       Importe: e.Importe ? e.Importe : 0,
        //       Usuario: e.Usuario ? e.Usuario : null,
        //       Obv: e.Obv ? e.Obv : null
        //     });
        //     return qI[0];
        //   } catch (e) {
        //     console.error(e);
        //     return 0;
        //   }
        // },

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

        // Delete: async function Delete(q) {
        //   let e = q.Query ? q.Query : q;
        //   try {
        //     var sqU = await knex("Consumos")
        //       .where({ Id: e.Id })
        //       .del();
        //     return sqU;
        //   } catch (e) {
        //     console.error(e);
        //     return 0;
        //   }
        // }
      };
    } // ------- Registros

  };
};



module.exports = mifunction;
