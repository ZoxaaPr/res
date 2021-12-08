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

// router.get("/", userController.getEmails);
router.post("/", userController.create);

module.exports = router;
