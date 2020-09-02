const router = require("express").Router();
const patronRoutes = require("./patronRoutes");

// Book routes
router.use("/patron", patronRoutes);

module.exports = router;
