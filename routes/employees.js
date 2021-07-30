const express = require("express");
const router = express.Router();

const employeesController = require("../controllers/employees");
router.get("./employees:id.getEmployeesById");

router.get("/employee/:id", employeesController.getEmployee);

router.get("/employee/name/:firstName", employeesController.getEmployeesByName);

module.exports = router;