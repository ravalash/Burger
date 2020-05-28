const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await burger.all();
  res.render("index", { burgers: result });
});

router.post("/api/burgers", async (req, res) => {
  const result = await burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured]
  );
  res.json({ id: result.id });
});

router.put("/api/burgers/:id", async (req, res) => {
  const result = await burger.update("devoured", 1, req.params.id);
  if (result.changedRows === 0) {
    return res.status(404).end();
  }
  res.status(200).end();
});

router.delete("/api/burgers/:id", async (req, res) => {
  const result = await burger.delete(req.params.id);
  if (result.affectedRows === 0) {
    return res.status(404).end();
  }
  res.status(200).end();
});

module.exports = router;
