require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

// config JSON and form data response

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Solve CORS
const corsOptions = {
  AccessControlAllowOrigin: "*",
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));

// Upload directory
app.use("/uploads", express.static("uploads"));

require("./config/db.js");

//routes
const router = require("./routes/Router.js");

app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
