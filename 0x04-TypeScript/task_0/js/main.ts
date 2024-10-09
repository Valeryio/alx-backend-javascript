
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const joel: Student = {
  firstName: "Joel",
  lastName: "Tradeboy",
  age: 22,
  location: "Godomey",
};

const peace: Student = {
  firstName: "Peace",
  lastName: "Salerboy",
  age: 23,
  location: "Cotonou",
};

let table = document.createElement("table");
let htmlBody = document.querySelector("body");

let studentsArray: Student[] = [
  joel,
  peace
];

for (const student of studentsArray) {
  let row = document.createElement("tr");
  let fName = document.createElement("td");
  let location = document.createElement("td");

  fName.innerHTML = student.firstName;
  location.innerHTML = student.location;

  row.appendChild(fName);
  row.appendChild(location);

  table.appendChild(row);
  console.log(`${student.firstName} ==> ${student.age}\n`);
}

htmlBody.append(table);
