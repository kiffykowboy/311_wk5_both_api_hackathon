const express = require("express");
const bodyParser = require("body-parser");
const employees = require("./routes/employees");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(employees);

app.listen(port, () => console.log("Server started"));
