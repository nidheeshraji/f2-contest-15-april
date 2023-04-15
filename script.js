/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log

  const developers = arr.filter(arr => arr.profession === "developer");
    const developerNames = developers.map(developer => developer.name);
    console.log(developerNames);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const developers = [];
    arr.forEach(arr => {
      if (arr.profession === "developer") {
        developers.push(arr);
      }
    });
    console.log(developers);
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = {id:4, name:"susan", age:"20", profession:"intern"};
    arr.push(newEmployee);
    console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredEmployees = arr.filter(arr => arr.profession !== "admin");
    console.log(filteredEmployees);
}

function concatenateArray() {
  //Write your code here, just console.log
    const newEmployees = [
      {id:4, name:"nidheesh", age:"28", profession:"developer"},
      {id:5, name:"nidhin", age:"29", profession:"designer"},
      {id:6, name:"sadheesh", age:"29", profession:"developer"},
      {id:7, name:"manu", age:"29", profession:"developer"}
    ];
    const allEmployees = arr.concat(newEmployees);
    console.log(allEmployees);
}
