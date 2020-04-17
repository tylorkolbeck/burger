const connection = require("./connection")

const orm = {
  selectAll: (tableName) => {
    connection.query(`SELECT * from ??`, tableName, (err, result) => {
      if (err) throw err
      else console.log(result)
    })
  },
  insertOne: (tableName, values) => {
    connection.query(
      `INSERT INTO ?? SET ?`,
      [tableName, values],
      (err, results) => {
        if (err) throw err
        else console.log(results)
      }
    )
  },

  updateOne: (tableName, columnName, value, id) => {
    connection.query(
      `UPDATE ?? SET ?? = ? WHERE id = ?`,
      [tableName, columnName, value, id],
      (err, results) => {
        if (err) throw err
        else console.log(results)
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
