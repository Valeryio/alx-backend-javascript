const fs = require('node:fs');

function countStudents(path = 'database.csv') {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const result = data.split('\n');
    result.pop();

    console.log(`Number of students: ${result.length - 1}`);
    const fields = [];

    for (let i = 0; i < result.length; i += 1) {
      // Get an array of data to manipulate each student
      result[i] = result[i].split(',');

      // Get the different fields
      if (!fields.includes(result[i][3]) && i > 0) {
        fields.push(result[i][3]);
      }
    }
    // console.log(result);
    // console.log(fields);

    const fieldsObj = [];

    for (let i = 0; i < fields.length; i += 1) {
      fieldsObj[i] = {};
      fieldsObj[i].field = fields[i];
      fieldsObj[i].number = 0;
      fieldsObj[i].students = [];

      for (let j = 1; j < result.length; j += 1) {
        if (result[j][3] === fields[i]) {
          fieldsObj[i].number += 1;
          fieldsObj[i].students.push(result[j][0]);
        }
      }

      fieldsObj[i].students = fieldsObj[i].students.join(', ');
      console.log(`Number of students in ${fieldsObj[i].field}: ${fieldsObj[i].number}. List: ${fieldsObj[i].students}`);
    }
    // console.log(fieldsObj);
    // console.log(data);
  });
}

module.exports = countStudents;
