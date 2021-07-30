const getEmployeesByFirstName = () => {

}

//Controller Function getEmployees

let getEmployees = function(req, res){;
  console.log("Inside GET employee by id")
  let id = req.params.id
  let sql = "SELECT * FROM employees WHERE emp_no = ?"
  connection.query(sql, [id], (error, rows) => {
    console.log("ROWS:", rows)
    if(error){
      console.error("failed", error);
      res.sendStatus(500);
    }else if (!rows || rows.length == 0){
      res.sendStatus(404);
    }else {
      res.send(rows[0]);
    }
  })
  
  };



const getEmployeesById = res.json(
  employees.find((employees) => employees.id == req.params.id)
);

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }
