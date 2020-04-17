const connection = require("./connection")

const orm = {
  selectAll: (tableName, cb) => {
    connection.query(
      `SELECT * from ?? ORDER BY id DESC`,
      tableName,
      (err, result) => {
        if (err) throw err
        else cb(result)
      }
    )
  },
  insertOne: (tableName, value, cb) => {
    connection.query(
      `INSERT INTO ?? SET ?`,
      [tableName, value],
      (err, results) => {
        if (err) throw err
        else cb(results)
      }
    )
  },

  updateOne: (tableName, value, id, cb) => {
    connection.query(
      `UPDATE ?? SET ? WHERE id = ?`,
      [tableName, value, id],
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
