const express = require('express')
const burger = require('../models/burger')

const router = express.Router();

router.get("/", (req, res) => {
  burger.all((data) => {
    const burgerObj = {
      burger: data,
    };
    console.log(burgerObj);
    res.render("index", burgerObj);
  });
});

router.post("/api/burger", (req, res) => {
  console.log(req.body)
  burger.create(req.body.burger, (result) => {
    // Send back the ID of the new quote
    console.log(result)
    res.json({ id: result.insertId });
  });
});

// burger.create(["burger_name", "devoured"], [req.body.burger, 0]





module.exports = router