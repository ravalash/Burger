const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

//Routes for server functions

//Index route, retrieves all saved burgers 
router.get("/", async (req, res) => {
  const result = await burger.all();
  res.render("index", { burgers: result });
});

//Post route to pass user data for new burger to API
router.post("/api/burgers", async (req, res) => {
  const result = await burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured]
  );
  res.json({ id: result.id });
});

//Update route to pass selected ID to update devoured status.
router.put("/api/burgers/:id", async (req, res) => {
  const result = await burger.update("devoured", 1, req.params.id);
  if (result.changedRows === 0) {
    return res.status(404).end();
  }
  res.status(200).end();
});

//Delete route to send ID for deletion from database
router.delete("/api/burgers/:id", async (req, res) => {
  const result = await burger.delete(req.params.id);
  if (result.affectedRows === 0) {
    return res.status(404).end();
  }
  res.status(200).end();
});

module.exports = router;
