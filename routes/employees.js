const express = require("express");
const router = express.Router();

const employeesController = require("../controllers/employees");
router.get("./employees:id.getEmployeesById");

module.exports = router;
