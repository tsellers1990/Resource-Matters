const router = require("express").Router();
const patronRoutes = require("./PatronRoutes");

// Book routes
router.use("/patron", patronRoutes);

module.exports = router;
