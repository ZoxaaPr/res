require("dotenv").config();
//const routers = require("./routes/api/register");
const admin = require("firebase-admin");
const seviceAcc = require("./config/conf.json");
const express = require("express");
const bdoyParser = require("body-parser");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer",
      },
      servers: ["http://localhost:3000"],
    },
  },
  // ['.routes/*.js']
  apis: ["./routes/api/register.js"],
};

const app = express();
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

admin.initializeApp({
  credential: admin.credential.cert(seviceAcc),
});

app.use(express.json());
router.use(cors());

app.use("/api", require("./routes/api/register"));

/**
 * @swagger
 * /:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/q", (req, res) => {
  res.status(200).send("Customer results");
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server working ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
