const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const { Connection } = require("../config/DatabaseConnection");
Connection();

const app = express();

const PORT = process.env.REACT_PORT;

const register = require("./routers/registeration");

app.use(morgan("dev"));
app.use(express.json());

app.use("/", register);

app.listen(8080, () => {
  console.log(`Server is running in ${PORT}`);
});
