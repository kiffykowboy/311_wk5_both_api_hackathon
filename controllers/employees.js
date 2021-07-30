module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName };

const getEmployeesById = res.json(
  employees.find((employees) => employees.id == req.params.id)
);
