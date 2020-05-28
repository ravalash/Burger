const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", async (req, res) => {
  const result = await burger.all();
  console.log(result);
  res.render("index", { burgers: result });
});

router.post("/api/burgers", async (req, res) => {
  console.log(req.body.burger_name + " " + req.body.devoured);
  const result = await burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured]
  );
  res.json({ id: result.id });
});

router.put("/api/burgers/:id", async (req, res) => {
  const result = await burger.update(
    "devoured",
    req.body.devoured,
    req.params.id
  );
  if (result.changedRows === 0) {
    // If no rows were changed, then the ID must not exist, so 404
    return res.status(404).end();
  }
  res.status(200).end();
});

// Export routes for server.js to use.
module.exports = router;
