const router = require("express").Router();
const db = require('../../models')

router.post("/add", (req, res)=>{
  db.Patron.create(req.body)
    .then(data=> res.json(data))
    .catch(err=> console.log("what the fuck"))
})

module.exports = router;
