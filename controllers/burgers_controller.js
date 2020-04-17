const express = require("express")
const Burger = require("../models/Burger")

const router = express.Router()

router.get("/", (req, res) => {
  Burger.selectAll((result) => {
    res.render("index", { burgers: result })
  })
})

router.get("/api/burgers", (req, res) => {
  Burger.selectAll((result) => {
    res.json(result)
  })
})

router.post("/api/burgers", (req, res) => {
  Burger.insertOne(
    { burger_name: req.body.burger_name, devoured: req.body.devoured },
    (result) => {
      res.json({ id: result.insertId })
    }
  )
})

router.put("/api/burgers/:id/devoured", (req, res) => {
  const id = req.params.id
  const devoured = req.body.devoured

  Burger.updateOne(devoured, id, (result) => {
    if (result.affectedRows === 0) {
      return res.sendStatus(404)
    }
    res.sendStatus(200)
  })
})

module.exports = router
