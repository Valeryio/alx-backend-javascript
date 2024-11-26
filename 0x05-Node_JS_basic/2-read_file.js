
const fs = require("node:fs");

function countStudents(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      throw new Error("Cannot load the database");
    }

    result = data.split("\n");
    result.pop();

    console.log(`Number of students: ${result.length - 1}`);

    fields = []
    
    for (let i = 0; i < result.length; i++){

      // Get an array of data to manipulate each student
      result[i] = result[i].split(",");

      // Get the different fields
      if (!fields.includes(result[i][3]) && i > 0) {
        fields.push(result[i][3]);
      }
    }

    console.log(result);
    console.log(fields);

    fields_obj = [];

    for (let i = 1; i < fields.length; i++) {

      let newObj = {};

      for (let j = 1; j < result.length; j++) {

        if (result[j][3] == fields[i]) {
          newObj
        }
      }
    }


    console.log(data);
  });
}

module.exports = countStudents;
