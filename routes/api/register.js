const express = require("express");
const userController = require("../../controllers/userController");
const router = express.Router();

/**
 * @swagger
 * /api:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */

router.get("/", (req, res) => {
  res.send("pipi");
});
router.post("/", userController.create);

module.exports = router;
