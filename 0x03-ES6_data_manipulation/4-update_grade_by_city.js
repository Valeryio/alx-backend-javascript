export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  let results = studentsList.filter((student) => student.location === city);
  // Use the right students to match them with their grades
  results = results.map((result) => {
    let newResult;
    for (let i = 0; i < newGrades.length; i += 1) {
      newResult = result;
      if (result.id === newGrades[i].studentId) {
        newResult.grade = newGrades[i].grade;
        break;
      } else {
        newResult.grade = 'N/A';
      }
    }

    return newResult;
  });

  return results;
}
