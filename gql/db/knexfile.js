module.exports = {
  dev: {
    client: "mysql",
    connection: {
      host: "104.198.192.138",
      port: 3306,
      user: "root",
      password: process.env.clouddb,
      database: "test"
    },
    pool: { min: 0, max: 50 }
  },

  eai: {
    client: "mysql",
    connection: {
      host: "104.198.192.138",
      port: 3306,
      user: "root",
      password: process.env.clouddb,
      database: "enlaceai"
    },
    pool: { min: 3, max: 250 }
  },



  ntcx1: {
    client: "mysql",
    connection: {
      host: "104.198.192.138",
      port: 3306,
      user: "root",
      password: process.env.clouddb,
      database: "ntcx1"
    },
    pool: { min: 3, max: 250 }
  },





};
