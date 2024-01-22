let knex = require("knex")(require("./knexfile")["ntcx1"]);
// let axios = require("axios");

// -------------------------------------------------------------

let mifunction = function () {
  return {
    Querys: function () {
      return {
        Basic: function (q) {
          try {
            let e = q.Query ? q.Query : q;

            let MiBase = knex
              .select("*")
              .modify((Q) => {
                if (e.Id) {
                  Q.where({ Id: e.Id });
                }
              })
              .modify((Q) => {
                if (e.SKU) {
                  Q.where({ SKU: e.SKU });
                }
              })
              .from("pharma_items")

              .as("pharma_items");
            return MiBase;
          } catch (e) {
            console.error(e);
          }
        },

        Producto: function (q) {
          try {
            let e = q.Query ? q.Query : q;

            let MiBase = knex
              .select("*")
              .modify((Q) => {
                if (e.Producto) {
                  Q.where("Producto", "like", `%${e.Producto}%`);
                }
              })

              .from("pharma_items")

              .as("pharma_items");
            return MiBase;
          } catch (e) {
            console.error(e);
          }
        },

        Ingrediente: function (q) {
          try {
            let e = q.Query ? q.Query : q;

            let MiBase = knex
              .select("*")
              .modify((Q) => {
                if (e.Ingredientes) {
                  Q.where("Ingredientes", "like", `%${e.Ingredientes}%`);
                }
              })

              .from("pharma_items")

              .as("pharma_items");
            return MiBase;
          } catch (e) {
            console.error(e);
          }
        },
        
        Extended: function (q) {
          try {
            let e = q.Query ? q.Query : q;

            let MiBase = knex
              .select("*")
              .modify((Q) => {
                if (e.Division) {
                  Q.where({ Space_division: e.Division });
                }
              })
              .modify((Q) => {
                if (e.Space) {
                  Q.where({ Space: e.Space });
                }
              })
              .modify((Q) => {
                if (e.Area) {
                  Q.where({ Area: e.Area });
                }
              })
              .modify((Q) => {
                if (e.Status) {
                  Q.where({ Status: e.Status });
                }
              })
              .modify((Q) => {
                if (e.Category) {
                  Q.where({ Category: e.Category });
                }
              })

              .from("Areas1")

              .orderBy([{ column: "Space" }, { column: "Listed_order" }])

              .as("Areas");
            return MiBase;
          } catch (e) {
            console.error(e);
          }
        },
      };
    }, // ------- Consultas

    Edit: function () {
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
                Obv: e.Obv ? e.Obv : null,
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
    }, // ------- Registros
  };
};

module.exports = mifunction;
