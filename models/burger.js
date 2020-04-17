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
    orm.updateOne("burgers", "devoured", value, id, (results) => {
      cb(results)
    })
  },
}

// burger.updateOne("burger_name", "New Burger Name1", 7, (result) => {
//   console.log(result)
// })

// burger.insertOne({ burger_name: "Yum Yum Burger", devoured: true }, (result) =>
//   console.log(result)
// )

// burger.selectAll((results) => {
//   console.log(results)
// })

module.exports = burger
