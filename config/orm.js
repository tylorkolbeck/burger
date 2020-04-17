const connection = require("./connection")

const orm = {
  selectAll: (tableName, cb) => {
    connection.query(`SELECT * from ??`, tableName, (err, result) => {
      if (err) throw err
      else cb(result)
    })
  },
  insertOne: (tableName, values, cb) => {
    connection.query(
      `INSERT INTO ?? SET ?`,
      [tableName, values],
      (err, results) => {
        if (err) throw err
        else cb(results)
      }
    )
  },

  updateOne: (tableName, columnName, value, id, cb) => {
    connection.query(
      `UPDATE ?? SET ?? = ? WHERE id = ?`,
      [tableName, columnName, value, id],
      (err, results) => {
        if (err) throw err
        else cb(results)
      }
    )
  },
}

// insert one
// orm.insertOne("burgers", { burger_name: "My burger 2", devoured: true })

// update one
// orm.updateOne("burgers", "devoured", true, 7)

// Select All
// orm.selectAll("burgers")

module.exports = orm
