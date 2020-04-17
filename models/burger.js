const orm = require("../config/orm")

const burger = {
  selectAll: (cb) => {
    orm.selectAll("burgers", (result) => {
      cb(result)
    })
  },
  insertOne: (values, cb) => {
    orm.insertOne("burgers", values, (result) => {
      cb(result)
    })
  },

  updateOne: (value, id, cb) => {
    orm.updateOne("burgers", { devoured: value }, id, (results) => {
      cb(results)
    })
  },
}

module.exports = burger
