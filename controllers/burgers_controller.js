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
  burger.create(["burger_name", "devoured"], [req.body.burger, 0], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});






module.exports = router