const router = require("express").Router();
const db = require('../../models')

router.post("/add", ({body}, res)=>{
  db.Patron.create(body)
    .then(data=> res.json(data))
    .catch(err=> console.log(err))
})

module.exports = router;
