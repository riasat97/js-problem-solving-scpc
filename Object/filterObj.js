let employees = {
    empList:[
    { id: 1, name: "John Doe", department: "Sales" },
    { id: 2, name: "Jane Smith", department: "Marketing" },
    { id: 3, name: "David Johnson", department: "Finance" },
    { id: 4, name: "Emily Davis", department: "HR" },
    { id: 5, name: "Michael Brown", department: "IT" }
  ]};

  //console.log(employees.empList);
  //const newList=employees.empList.filter((emp)=> emp.id>3);
  //console.log(newList);

  //return selected fields ex- name and dept

  const selectedField= employees.empList.map((emp)=>{
    return  {
      name: emp.name.concat('-',emp.id) ,
      dept: emp.department
    }
  });
  console.log(selectedField);